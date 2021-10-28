const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Individual Post</h1>
    <p>A single post will go here...</p>`);
});

module.exports = router;
