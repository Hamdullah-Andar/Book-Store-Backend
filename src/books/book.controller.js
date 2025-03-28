const Book = require("./book.model");

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted Successfully", book: newBook });
  } catch (error) {
    console.error("Error Creating Book", error);
    res.status(500).send({ message: "Failed to post Book", error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(allBooks);
  } catch (error) {
    console.error("Error fetching Books", error);
    res.status(500).send({ massage: "Failed to fetch books", error: error });
  }
};

module.exports = {
  postABook,
  getAllBooks,
};
