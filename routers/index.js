const express = require("express");
const router = express.Router();

const firebase = require("firebase/firestore/lite");
const db = firebase.firestore();
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  //create empty array
  const blogpostsArray = [];
  //Get blogposts JSON from Firebase
  //Push document form blogposts into blogposts array...
  res.send([]);
});

module.exports = router;
