const express = require('express')
const UserExams = require('../models/userExams')
const router = express.Router()
 
router.get('/', (req, resp)=>{
    UserExams.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
 
router.post('/', (req, resp)=>{
    const userExams = new UserExams({
        examId: req.body.examId,
        userId: req.body.userId,
        grade: req.body.grade,
    })
    userExams.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
 
router.patch('/:id', (req, resp) => {
    UserExams.updateOne({_id: req.params.id}, {
            $set: {
                examId: req.body.examId,
                userId: req.body.userId,
                grade: req.body.grade,
            }
        }).then(data => {
                resp.json(data)
        }).catch(e => {
                resp.json({message: e})
        })
})
 
router.delete('/:id', (req, resp)=>{
    UserExams.deleteOne({_id: req.params.id})
    .then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
 
module.exports = router;