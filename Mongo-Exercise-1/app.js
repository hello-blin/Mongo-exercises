const express = require("express");
const app = express();
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  tags: [String],
  isPublished: Boolean,
});

const Course = new mongoose.model("Course", courseSchema);



//EXERCISE 1 

async function getCourse(){

}

app.listen(3000, () => {
  console.log("Connected to 3000");
});
