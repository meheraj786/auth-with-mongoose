const mongoose= require('mongoose')

const BookSchema= mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
})

module.exports= mongoose.model('Book', BookSchema)