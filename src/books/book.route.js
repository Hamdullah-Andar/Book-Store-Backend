const express = require("express");
const Book = require("./book.model");
const { postABook, getAllBooks } = require("./book.controller");
const router = express.Router();

// frontend => backend server => controller => book Schema => database => send to server => back to frontend

// post = when submit something frontend to db
// get = when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// Post a book
router.post("/create-book", postABook);

// Get all Books
router.get("/", getAllBooks);

module.exports = router;
