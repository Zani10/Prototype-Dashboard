const express = require("express");
const Teacher = require("../models/Teacher");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers data" });
  }
});

module.exports = router;
