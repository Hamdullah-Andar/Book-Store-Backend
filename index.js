const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://k-book-store-frontend.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
const subscriberRoutes = require("./src/subscriber/subscriber.route");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/subscriber", subscriberRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  // routes
  app.use("/", (req, res) => {
    res.send("Book Store server is Running!");
  });
}

main()
  .then(() => console.log("Mongodb connected Successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
