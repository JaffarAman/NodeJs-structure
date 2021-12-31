const express = require("express");
const {
  signupController,
  loginController,
} = require("../controllers/AuthControllers");
const router = express.Router();

router.post("/api/v1/signup", signupController);

router.get("/api/v1/login", loginController);

module.exports = router;
