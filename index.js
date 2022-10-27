const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Api running");
});

app.get("/course-list", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
