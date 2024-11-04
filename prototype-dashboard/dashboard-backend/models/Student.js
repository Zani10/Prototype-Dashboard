const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  year: Number,
  courses: {
    type: Map,
    of: Number, 
  },
});

module.exports = mongoose.model("Student", studentSchema);
