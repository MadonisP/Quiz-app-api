const mongoose = require("mongoose");

const UserExamsSchema = new mongoose.Schema({
    examId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("UserExams", UserExamsSchema);