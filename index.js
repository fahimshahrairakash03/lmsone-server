const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const allcourses = require("./data/course-detials.json");

app.get("/", (req, res) => {
  res.send("Api running");
});

app.get("/allcourse", (req, res) => {
  res.send(allcourses);
});

app.get("/course-list", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(allcourses);
  } else {
    const selectedCourse = allcourses.filter((c) => c.category_id === id);
    res.send(selectedCourse);
  }
});

app.get("/selected/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = allcourses.find((c) => c._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
