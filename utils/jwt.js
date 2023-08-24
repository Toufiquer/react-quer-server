var jwt = require("jsonwebtoken");

module.exports.creteToken = (email) => {
  try {
    return jwt.sign(
      {
        email,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
  } catch (err) {
    console.log("jwt: ", err, " => Line No: 13");
  }
};
module.exports.decodeToken = (email) => {
  try {
    return jwt.verify(token, "wrong-secret");
  } catch (err) {
    console.log("jwt: ", err, " => Line No: 20");
  }
};
