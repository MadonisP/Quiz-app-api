const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  creatorUserId: {
    type: String,
    required: true,
  },
  examname: {
    type: String,
    lowercase: true,
  },
  passGrade:{
    type: Number,
    default:70,
  },
  time:{
    type: Number,
    default:20,
  },
});

module.exports = mongoose.model("exam", ExamSchema);

