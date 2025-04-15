const express = require("express");
const { createAnOrder, getOrderByEmail, getAllOrder } = require("./order.controller");

const router = express.Router();

// create order endpoint
router.post("/", createAnOrder);

// get all Orders endpoint
router.get("/allOrders", getAllOrder);

// get orders by user email 
router.get("/email/:email", getOrderByEmail)

module.exports = router;
