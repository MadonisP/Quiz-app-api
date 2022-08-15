const express = require('express')
const Exam = require('../models/exam')
const router = express.Router()

//Get Exam(s)
router.get('/', (req, resp) => {
    Exam.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

//GET Exam
router.get("/:id", async (req, resp) => {
    try {
        Exam.find({ creatorUserId: req.params.id}).then(data => {
            resp.json(data)
        })
    } catch (err) {
        resp.json({ message: err });
    }
});

//GET Exam by examId
router.get("/exam/:id", async (req, resp) => {
    try {
        Exam.find({ _id: req.params.id }).then(data => {
            resp.json(data)
        })
    } catch (err) {
        resp.json({ message: err });
    }
});

router.post('/', (req, resp) => {
    const exam = new Exam({
        creatorUserId: req.body.creatorUserId,
        examname: req.body.examname,
        passGrade: req.body.passGrade,
        time: req.body.time,
    })
    exam.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

router.patch('/:id', (req, resp) => {
    Exam.updateOne({ _id: req.params.id }, {
        $set: {
            examname: req.body.examname,
            passGrade: req.body.passGrade,
            time: req.body.time,
        }
    }).then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

router.delete('/:id', (req, resp) => {
    Exam.deleteOne({ _id: req.params.id })
        .then(data => {
            resp.json(data)
        }).catch(e => {
            resp.json({ message: e })
        })
})

module.exports = router;