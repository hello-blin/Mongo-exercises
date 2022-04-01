const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((error) => {
    console.log(error.message, "Error");
  });

const courseSchema = new mongoose.Schema({
  name: { type: String, minLength: 3, maxLength: 33 },
  author: { type: String },
  isPublished: { type: Boolean },
  price: { type: Number },
  tags: [String],
});
const Course = new mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    name: "Typescript",
    author: "Loremin Ipsumaj",
    isPublished: false,
    price: 32,
    tags: ["Programming Language", "Microsoft", "TSX"],
  });

  const result = await course.save();
  console.log(result);
}
try {
  //   createCourse();
} catch (error) {
  console.log(error);
}

/////////////////////////////

//QUERYING BY AUTHOR AND ISPUBLISHED and LIMITING BY 10 ALSO SELECTING ON NAME AND TAGS

// async function getCourses() {
//   const courses = await Course.find({ author: "John Doe", isPublished: false })
//     .limit(10)
//     .sort({ author: 1 })
//     .select({ name: 1, tags: 1 });
//   console.log(courses);
// }

// getCourses();

//QUERYING BY AUTHOR AND ISPUBLISHED

/////////////////////////////

/////////////////////////////

//QUERYING BY PRICE TO SHOW COURSES GREATER THAN 22$

// async function getCoursesByComparisionOperators() {
//   const courses = await Course.find({ price: { $gt: 22 } })
//     .limit(10)
//     .sort({ author: 1 })
//     .select({ name: 1, tags: 1, price: 1 });
//   console.log(courses);
// }

// getCoursesByComparisionOperators();

//QUERYING BY PRICE TO SHOW COURSES GREATER THAN 22$

/////////////////////////////

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
