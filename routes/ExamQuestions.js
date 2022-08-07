const express = require('express')
const ExamQuestions = require('../models/examQuestions')
const router = express.Router()
 
router.get('/', (req, resp)=>{
    ExamQuestions.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
 
router.post('/', (req, resp)=>{
    const examQuestions = new ExamQuestions({
        examId: req.body.examId,
        questionTitle: req.body.questionTitle,
        options: req.body.options,
    })
    examQuestions.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
 
router.patch('/:id', (req, resp) => {
    ExamQuestions.updateOne({_id: req.params.id}, {
            $set: {
                examId: req.body.examId,
                questionTitle: req.body.questionTitle,
                options: req.body.options,
            }
        }).then(data => {
                resp.json(data)
        }).catch(e => {
                resp.json({message: e})
        })
})
 
router.delete('/:id', (req, resp)=>{
    ExamQuestions.deleteOne({_id: req.params.id})
    .then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
 
module.exports = router;