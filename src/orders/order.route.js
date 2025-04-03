const express = require("express");
const { createAnOrder } = require("./order.controller");

const router = express.Router();

// create order endpoint
router.post("/", createAnOrder);

module.exports = router;
