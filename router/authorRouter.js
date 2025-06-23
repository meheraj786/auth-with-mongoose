const express= require('express')
const authorRouter= express.Router()
const authorController= require('../controller/authorController')

authorRouter.get('/', authorController.getAllAuthor)
authorRouter.post('/', authorController.createAuthor)


module.exports=authorRouter