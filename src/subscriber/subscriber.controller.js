// routes/subscribe.js

const Subscriber = require("./subscriber.model");

const addSubscriber = async (req, res) => {
  const { email } = req.body;
  console.log("Received email:", email);
  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.json({ message: "You're already subscribed!" });

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.json({ message: "Subscription successful!" });
  } catch (err) {
    res.status(500).json({ message: "Error subscribing" });
  }
};

module.exports = {
  addSubscriber,
};
