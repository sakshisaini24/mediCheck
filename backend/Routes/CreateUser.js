const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")
const jwtSecret= "helloSakshiSainiHowAreYouYouCanDoItDontGiveUp"

router.post("/createuser", body('email').isEmail(), body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 }), async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt= await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            console.log(req.body)
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
            })
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

router.post("/loginuser", body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }), async (req, res) => {
        let email = req.body.email
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            console.log(req.body)
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res.status(400).json({ errors: "Could not find your email! Try Again!" })
            }
            const pwdCompare= await bcrypt.compare(req.body.password, userdata.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Could not find your credentials! Try Again!" })
            }
            const data={
                user:{
                    id:userdata.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success: true , authToken:authToken})
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })


module.exports = router;