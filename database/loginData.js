const bcryptjs = require("bcryptjs");
const { errors } = require("../helper");
const AuthModel = require("../Models/AuthModels/AuthModel");

const loginData = async (userObj) => {
  return new Promise((resolve, reject) => {
    const { email, password } = userObj;

    try {
      AuthModel.findOne({ email }, async (err, data) => {
        if (err) {
          errors["002"].reason = err.message || "";
        } else {
          const isPasswordMatch = await bcryptjs
            .compare(password, data.password)
            .then((response) => {
              if (response) {
                resolve({ message: "user successfully login", data: data });
              } else {
                resolve({ message: "Password is not match" });
              }
            })
            .catch((err) => {
              errors["002"].reason = err.message || "";
            });
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

module.exports = {
  loginData,
};
