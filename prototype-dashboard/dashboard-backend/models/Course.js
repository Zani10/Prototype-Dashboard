const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  teacher: String,
  schedule: [
    {
      day: String,
      time: String,
    }
  ],
});

module.exports = mongoose.model("Course", courseSchema);
