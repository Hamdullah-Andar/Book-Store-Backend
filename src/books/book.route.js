const express = require("express");
const router = express.Router();

// Post a bokk
router.post("/create-book", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
