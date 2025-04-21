const express = require("express");
const { createAnOrder, getOrderByEmail, getAllOrder, getOrderById } = require("./order.controller");

const router = express.Router();

// create order endpoint
router.post("/", createAnOrder);

// get all Orders endpoint
router.get("/allOrders", getAllOrder);

// get orders by user email 
router.get("/email/:email", getOrderByEmail)

router.get("/:id", getOrderById);

module.exports = router;
