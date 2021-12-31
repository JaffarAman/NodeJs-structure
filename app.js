const express = require("express");
const config = require("./config");
const router = require("./routes/AuthRoute");
const app = express();
const PORT = config.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
///body allow///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require("dotenv").config();

// connectDb();
const dbObj = {
   useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(process.env.DB_URI , dbObj);
app.use(router);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error.status || 500);
        res.send({
            message: error.message,
            error: error
        });
    });
}



// Production error handler
// No stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.send({
        message: error.message,
        error: error
    });
});



app.listen(PORT, () => console.log(`Server is Running on localhost:${PORT}`));
