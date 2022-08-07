const express = require('express')
const User = require('../models/user')
const router = express.Router()
 
router.get('/', (req, resp)=>{
    User.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
 
router.post('/', (req, resp)=>{
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    })
    user.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
 
router.patch('/:id', (req, resp) => {
    User.updateOne({_id: req.params.id}, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
            }
        }).then(data => {
                resp.json(data)
        }).catch(e => {
                resp.json({message: e})
        })
})
 
router.delete('/:id', (req, resp)=>{
    User.deleteOne({_id: req.params.id})
    .then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
 
module.exports = router;