const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Enter a password"],
    minlength: 6,
    trim: true,
  },
confirmPassword: { 
  type: String,
  required: [true, "Enter Confirm password"],
  minlength: 6,
  trim: true,
  validate: {
    validator: function () {
      return this.password === this.confirmPassword;
    },
    message: "Password doesn't match"
  }
}

});

module.exports = mongoose.model("Author", AuthorSchema);
