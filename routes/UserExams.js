const express = require('express')
const UserExams = require('../models/userExams')
const router = express.Router()

router.get('/', (req, resp) => {
    UserExams.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

//spesific exam
router.get("/:id", async (req, resp) => {
    try {
        UserExams.find({ userId: req.params.id }).then(data => {
            resp.json(data)
        })
    } catch (err) {
        resp.json({ message: err });
    }
});

router.get("/exam/:id", async (req, resp) => {
    try {
        UserExams.find({ examId: req.params.id }).then(data => {
            resp.json(data)
        })
    } catch (err) {
        resp.json({ message: err });
    }
});

router.post('/', (req, resp) => {
    const userExams = new UserExams({
        examId: req.body.examId,
        userId: req.body.userId,
        grade: req.body.grade,
    })
    userExams.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

router.patch('/:id', (req, resp) => {
    UserExams.updateOne({ userId: req.params.id }, {
        $set: {
            examId: req.body.examId,
            userId: req.body.userId,
            grade: req.body.grade,
        }
    }).then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

router.delete('/:id', (req, resp) => {
    UserExams.deleteOne({ _id: req.params.id })
        .then(data => {
            resp.json(data)
        }).catch(e => {
            resp.json({ message: e })
        })
})

module.exports = router;