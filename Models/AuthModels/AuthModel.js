const mongoose = require("mongoose");
const AuthSchema = mongoose.Schema({
        email : {
            type : String,
            require : true
        },
        password : {
            type : String,
            require : true
        }
})

const AuthModel = mongoose.model("user" , AuthSchema)

module.exports = AuthModel