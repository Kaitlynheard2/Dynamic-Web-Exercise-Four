const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const indexRoute = require("./routers/index");
const articleRoute = require("./routers/article");
const createArticleRoute = require("./routers/createArticle");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
