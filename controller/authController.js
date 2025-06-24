const Author = require("../models/Author")

const signUp= async(req, res)=>{

  let author= new Author({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password,
    confirmPassword: req.body.confirmPassword
  })
  let save= await author.save()
  res.json(save)
}

const signIn= (req, res)=>{

}

module.exports={
  signUp,
  signIn
}