const mongoose = require("mongoose");
const { authPreMiddleWare, authPostMiddleWare } = require("./auth.middleware");
const authSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [false, "Please provide a name for this auth"],
      trim: true,
      unique: false,
      minLength: [3, "Name required at list 3 letter"],
    },
    email: {
      type: String,
      require: [true, "Please provide an email for this auth"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: [false, "Please provide a password for this auth"],
      trim: true,
      unique: false,
      minLength: [3, "Password required at list 3 letter"],
    },
    photoUrl: {
      type: String,
      require: [false, "Please provide a PhotoUrl for this auth"],
      trim: true,
      unique: false,
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "instructor", "student", "jsInstructor"],
        message: "there must be a role for the user",
      },
      require: [false, "Please provide a role for this auth"],
      trim: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

// * middleware
/* This middleware is invoke before and after save the value */
authSchema.pre("save", authPreMiddleWare);
authSchema.post("save", authPostMiddleWare);

// * static method
// you can call this method from controller
authSchema.methods.logger = function () {};

module.exports.authSchema = authSchema;
