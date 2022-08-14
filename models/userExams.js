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
    userInfo: {
        username: {
            type: String,
        },
        examname: {
            type: String,
        }
    },
    examReview: [{

        qAnswers: {
            type: Array,
        },
        qCorrect: {
            type: Array,
        },
        qTitle: {
            type: Array,
        }
    }
    ]
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("UserExams", UserExamsSchema);