const express = require("express");
const router = express.Router();

const form = `<h1>Create Article</h1>
<form action="create/submit">
  <div style="
  display:flex;
  flex-direction:column;
  width:20%;
  >
  <label for="articleTitle">Article Title </label>
  <input 
    type="text"
    name="articleTitle"
    placeholder="type article title..." />
  <label for="articleText">Article Text </label>
  <input 
    type="text"
    name="articleText"
    placeholder="type article text..." />
  <label for="author">Author</label>
  <input 
    type="text"
    name="author"
    placeholder="author name..." />
  </div>
  <button type="submit">Submit Article</button>
</form>
`;

//require Firebase
const firestore = require("firebase/firestore");

//reference Firestore
const db = firestore.getFirestore();

//serves web form for users
router.get("/", (req, res) => {
  res.send(form);
});

//API Endpoint for submitting data through our form
router.get("/submit", (req, res) => {
  const queryParams = req.query; //Query params for URL
  const title = queryParams.articleTitle;
  const text = queryParams.articleText;
  const author = queryParams.author;

  //create ID from title
  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();
  console.log({ title, text, author });

  //submit post to firebase
  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "blogposts", idFromTitle),
    {
      title: title,
      text: text,
      author: author,
    }
  );

  setBlogPost
    .then((repsonse) => {
      //if successful send correct message
      res.send(
        `<h1>Submission Successful!</h1>
        <p><a href="/create"> Add another Post</a></p>`
      );
    })
    .catch((error) => {
      console.warn(error);
      res.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;
