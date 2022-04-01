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

/////////////////////////////

//QUERYING BY PRICE TO SHOW COURSES GREATER OR EQUAL THAN 28$

// async function getCoursesByComparisionOperators() {
//   const courses = await Course.find({ price: { $gte: 28 } })
//     .limit(10)
//     .sort({ author: 1 })
//     .select({ name: 1, tags: 1, price: 1 });
//   console.log(courses);
// }

// getCoursesByComparisionOperators();

//QUERYING BY PRICE TO SHOW COURSES GREATER OR EQUAL THAN 28$

/////////////////////////////

/////////////////////////////

//QUERYING BY PRICE TO SHOW COURSES GREATER THAN 22$ AND LESS THAN 50%

// async function getCoursesByComparisionOperators() {
//   const courses = await Course.find({ price: { $gt: 22, $lte: 50 } })
//     .limit(10)
//     .sort({ author: 1 })
//     .select({ name: 1, tags: 1, price: 1 });
//   console.log(courses);
// }

// getCoursesByComparisionOperators();

//QUERYING BY PRICE TO SHOW COURSES GREATER THAN 22$ AND LESS THAN 50%

/////////////////////////////

/////////////////////////////

//QUERYING BY PRICE TO SHOW COURSES THAT MATCH THE VALUES 28, 55, 65

// async function getCoursesByComparisionOperators() {
//   const courses = await Course.find({ price: { $in: [32, 28, 65, 55, 43] } })
//     .limit(10)
//     .sort({ author: 1 })
//     .select({ name: 1, tags: 1, price: 1 });
//   console.log(courses);
// }

// getCoursesByComparisionOperators();

//QUERYING BY PRICE TO SHOW COURSES GREATER THAN 22$

/////////////////////////////

//----------------------------------------------------------------LOGICAL QUERY OPERATORS----------------------------------------------------------------

async function getCourse() {
  //or
  //and

  const courses = await Course.find()
    .or()
    .sort({ price: 1, name: 1 })
    .select({ price: 1, name: 1, tags: 1 });

  console.log(courses);
}

//----------------------------------------------------------------LOGICAL QUERY OPERATORS----------------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
