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

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBook = await Book.findById(id);
    if (!singleBook) {
      res.status(404).send({ message: "Book not Found!" });
    }
    res.status(200).send(singleBook);
  } catch (error) {
    console.error("Error fetching single Book", error);
    res.status(500).send({ message: "Failed to fetch Single Book" });
  }
};

// Update book data
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({
      message: "Book updated Successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error updating Book", error);
    res.status(500).send({ message: "Failed to update Book" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
};
