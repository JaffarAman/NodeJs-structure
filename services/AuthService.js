const bcryptjs = require("bcryptjs");
const { loginData } = require("../database/loginData");
const { signupData } = require("../database/signupData");
const { errors } = require("../helper");

const signupService = async (req) => {
  try {
    const { email, password } = req.body;
    const hashPassword = await bcryptjs.hash(password, 10);
    const userObj = {
      email: email,
      password: hashPassword,
    };
    const signupRecord = await signupData(userObj);
    return signupRecord;
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

const loginServie = async (req) => {
  try {
    const { email, password } = req.body;
    const userObj = {
      email,
      password,
    };
    const userRecord = await loginData(userObj);
    return userRecord;
  } catch (error) {
    errors["003"].reason = error.message;
    return errors["003"];
  }
};

module.exports = {
  signupService,
  loginServie,
};
