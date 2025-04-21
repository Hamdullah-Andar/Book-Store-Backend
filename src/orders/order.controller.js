const Order = require("./order.model");

const createAnOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find().populate("productIds").sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    }
    console.log("Orders fetched successfully", orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
}

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).populate("productIds").sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    console.log("Orders fetched successfully", orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate("productIds");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order by ID", error);
    res.status(500).json({ message: "Failed to fetch order by ID" });
  }
};


module.exports = {
  createAnOrder,
  getAllOrder,
  getOrderByEmail,
  getOrderById
};
