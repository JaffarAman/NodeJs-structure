const AuthModel = require("../Models/AuthModels/AuthModel");
var bcrypt = require("bcryptjs");
const { responseJsonHandler } = require("../helper");
const { signupService, loginServie } = require("../services/AuthService");

const signupController = async (request, response) => {
  const data = await signupService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

const loginController = async (request, response) => {
  const data = await loginServie(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};



module.exports = {
  signupController,
  loginController,
};
