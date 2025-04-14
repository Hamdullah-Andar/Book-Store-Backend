const express = require("express");
const router = express.Router();

const { addSubscriber } = require("./subscriber.controller");

router.post("/create-subscriber", addSubscriber);

module.exports = router;