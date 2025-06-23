const Author= require('../models/Author')

const createAuthor= async (req,res)=>{
  const author= new Author(req.body)
  const save= await author.save()
  res.json(save)

}

const getAllAuthor= async(req,res)=>{
  const authors= await Author.find()
  res.json(authors)
}

module.exports ={createAuthor, getAllAuthor}