const mongoose = require("mongoose");

const ExamQuestionsSchema = new mongoose.Schema({
    examId: {
        type: String,
        required: true,
        unique: true
    },
    questionTitle: {
        type: String,
        required: true,
        unique: true
    },
    options: {
        type: Array,
        required:true,
    },
})

module.exports = mongoose.model("examQuestions", ExamQuestionsSchema);