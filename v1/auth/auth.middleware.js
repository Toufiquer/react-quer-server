/* This middleware is invoke before save the value */
module.exports.authPreMiddleWare = function (next) {
  if (this.role ===undefined) {
    this.role = "student";
  }
  next();
};
/* This middleware is invoke after save the value */
module.exports.authPostMiddleWare = function (doc, next) {
  next();
};
