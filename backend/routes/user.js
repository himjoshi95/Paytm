const express = require('express')
const router = express.Router()
const { JWT_SECRET } = require('../config')
const { User } = require('../db')
const zod = require('zod')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authMiddleware =  require('../middleware')


const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string().min(3).max(50),
    lastName: zod.string().min(3).max(50),
    password: zod.string().min(3)
})

router.post('/signup', async (req, res) => {
    const { success,error } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Wrong Inputs",
            error 
        })        
    }

    try {
        const hashedPassword = await bcrypt.hash(req.body.password,5)
        const user = await User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password:hashedPassword
        })

        const token = jwt.sign({userId:user._id},JWT_SECRET)
        return res.status(200).json({
            message: "User created successfully",
            token
        })
        
    } catch (e) {
        return res.status(411).json({
            message: "User Already Exists"
        })
        
    }
})

const signinSchema = zod.object({
    username: zod.string().email(),
    password:zod.string().min(3)
})

router.post('/signin', async (req, res) => {
    const { success, error } = signinSchema.safeParse(req.body)    
    if (!success) {
        return res.status(411).json({
            message: "Wrong inputs",
            error
        })
    }

    const userExists = await User.findOne({ username: req.body.username })
    
    if (!userExists) {
        return res.status(403).json({
            message: "User Does not Exist"
        })
    }
    const passwordMatch = await bcrypt.compare(req.body.password, userExists.password)
    
    if (passwordMatch) {
        const token = jwt.sign({
            userId : userExists._id
        }, JWT_SECRET)
        return res.status(200).json({
            token
        })
    } else {
        return res.status(411).json({
            message: "Wrong Password Credentials"
        })
    }   
})

router.get('/', authMiddleware, (req, res) => {
    return res.json({
        userID:req.userId
    })
})




module.exports = router