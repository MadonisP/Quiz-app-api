const express = require('express')
const bcrypt = require('bcrypt');
const User = require('../models/user')
const router = express.Router()

router.get('/', (req, resp) => {
    User.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

//spesific user
router.get("/:id", async (req, resp) => {
    try {
        User.find({ _id: req.params.id }).then(data => {
            resp.json(data)
        })
    } catch (err) {
        resp.json({ message: err });
    }
});

router.post("/", async (req, resp) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const userExists = await User.findOne({ email })
        if (userExists)
            return resp.status(400).json({ message: 'User already exists.' })

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword
        })

        return resp.status(201).json(createdUser);
    } catch (error) {
        console.log(error)
        return resp.json({ message: "create user failed" })
    }
})

router.post("/login", async (req, resp) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user)
            return resp.status(400).json({ message: "user does not exist" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect)
            return resp.status(400).json({ message: "Wrong Password" })

        return resp.status(200).json({ user, message: 'Authentication successful' })
    } catch (error) {
        return resp.status(400).json({ message: error.message })
    }
})

router.patch('/:id', (req, resp) => {
    User.updateOne({ _id: req.params.id }, {
        $set: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }
    }).then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

router.delete('/:id', (req, resp) => {
    User.deleteOne({ _id: req.params.id })
        .then(data => {
            resp.json(data)
        }).catch(e => {
            resp.json({ message: e })
        })
})

module.exports = router;