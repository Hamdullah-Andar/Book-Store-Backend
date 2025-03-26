const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// routes
app.use("/", (req, res) => {
    res.send("Book Store server!");
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})