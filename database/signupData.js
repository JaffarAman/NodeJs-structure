const { errors } = require("../helper");
const AuthModel = require("../Models/AuthModels/AuthModel");

const signupData = async (userObj) => {
  return new Promise((resolve, reject) => {
    const { email, password } = userObj;

    try {
      AuthModel.findOne({ email }, (err, data) => {
        if (err) {
          errors["002"].reason = err.message || "";
          reject(errors["002"]);
        } else {
          if (data) {
            resolve({ message: "This Email Address is Already Exist" });
          } else {
            AuthModel.create(userObj, (error, userData) => {
              if (error) {
                errors["002"].reason = err.message || "";
                reject(errors["002"]);
              } else {
                resolve({ message: "User SuccessFully Signup" });
              }
            });
          }
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

module.exports = {
  signupData,
};
