const express = require("express");
const app = express();

const port = process.env.PORT || 4000;
const firebase = require("firrebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBxm6_253NWqCgZ87rQjz_z2u2PlvZPN5w",
  authDomain: "kaitlyn-exercise-four.firebaseapp.com",
  projectId: "kaitlyn-exercise-four",
  storageBucket: "kaitlyn-exercise-four.appspot.com",
  messagingSenderId: "827213467323",
  appId: "1:827213467323:web:d9c40e3a23e366dfda239e",
  measurementId: "G-3XYCYQHVYV",
};

const app = inititializeApp(firebaseConfig);

const indexRoute = require("./routers/index");
const articleRoute = require("./routers/article");
const createArticleRoute = require("./routers/createArticle");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
