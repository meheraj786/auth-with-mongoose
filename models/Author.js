const mongoose = require("mongoose");
const bcrypt= require('bcryptjs')

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
    unique: true,
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

AuthorSchema.pre('save', async function(next){
  try {
    const hasedPassword= await bcrypt.hash(this.password, 10)
    this.password= hasedPassword;
    this.confirmPassword=hasedPassword;
    
  } catch (error) {
    console.log(error);
  }
  next()
})

module.exports = mongoose.model("Author", AuthorSchema);
