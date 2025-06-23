const Book = require("../models/Book");

const createBook = async (req, res) => {
  const book = new Book(req.body);
  const save = await book.save();
  res.json(save);
};

const getAllBook = async (req, res) => {
  const allBook = await Book.find().populate('author', 'name');
  res.json(allBook);
};

module.exports = { createBook, getAllBook };
