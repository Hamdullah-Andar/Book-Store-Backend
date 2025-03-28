const express = require("express");
const Book = require("./book_model");
const router = express.Router();

// Post a bokk
router.post("/create-book", async (req, res) => {
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
});

module.exports = router;
