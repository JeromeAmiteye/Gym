const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Ji is good");
  res.json({ message: "Fitness App Backend - Free Version" });
});
db.students.insertOne({
  graduationDate: null,
  courses: ["Biology", "Chemistry", "Calculus"],
  address: {
    street: "123 Fake st.",
    city: "Bikini Bottom",
    zip: 12345,
  },
});
