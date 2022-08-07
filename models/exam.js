const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  creatorUserId: {
    type: String,
    required: true,
  },
  examName: {
    type: String,
    lowercase: true,
  },
  time:{
    type: Number,
    default:20,
  },
});

module.exports = mongoose.model("exam", ExamSchema);

