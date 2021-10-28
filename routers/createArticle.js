const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Create Article</h1>
    <form>
    <div>
    <label for="articleTitle">Article Title </label>
    <input 
    type="text"
    name="articleTitle"
    placeholder="type article title..." />
    </div>
    <button type="submit">Submit Article</button>
    </form>
    `);
});

module.exports = router;
