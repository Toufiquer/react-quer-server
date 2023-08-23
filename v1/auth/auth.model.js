const mongoose = require("mongoose");
const { authSchema } = require("./auth.schema");
module.exports.authModel = mongoose.model("Auth", authSchema);
/**
 * * Just create a model using schema and export it
 */ 