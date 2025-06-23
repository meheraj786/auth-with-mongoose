const express= require('express')
const mongoose= require('mongoose')
require('dotenv').config()
const app= express()
app.use(express.json())
const booksRouter= require('./router/booksRouter')
const authorRouter= require('./router/authorRouter')
const PORT= process.env.PORT ||6000
const MONGO_URL= process.env.MONGO_DB
mongoose.connect(MONGO_URL)
  .then(()=>console.log("DB Connected"))
  .catch((err)=>console.log(err))

app.use("/book", booksRouter)
app.use("/author", authorRouter)





app.listen(PORT, ()=>{
  console.log("server is running " + PORT);
})