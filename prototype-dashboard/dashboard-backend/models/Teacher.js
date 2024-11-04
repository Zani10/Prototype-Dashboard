const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  availability: [
    {
      day: String,
      time: String,
    },
  ],
  expertLabAvailability: [
    {
      day: String,
      time: String,
    },
  ],
});

module.exports = mongoose.model("Teacher", teacherSchema);
