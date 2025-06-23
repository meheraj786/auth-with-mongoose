const express= require('express')
const booksRouter= express.Router()
const booksController= require('../controller/booksController')


booksRouter.get('/', booksController.getAllBook)
booksRouter.post('/', booksController.createBook)


module.exports=booksRouter