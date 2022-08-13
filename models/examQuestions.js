const mongoose = require("mongoose");

const ExamQuestionsSchema = new mongoose.Schema({
    examId: {
        type: String,
    },
    questionTitle: {
        type: String,
    },
    options: {
        type: Array,
    },
    correctOption: {
        type: String
    },
},
    {
        timestamps: true,
    }

)

module.exports = mongoose.model("examquestions", ExamQuestionsSchema);