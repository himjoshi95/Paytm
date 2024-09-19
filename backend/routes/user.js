const express = require('express')
const router = express.Router()
const { JWT_SECRET } = require('../config')
const { User,Account } = require('../db')
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

        await Account.create({
            userId: user._id,
            balance: Math.floor(Math.random()*10000 +1)
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

const updateBodySchema = zod.object({
    firstName: zod.string().min(3).max(50).optional(),
    lastName: zod.string().min(3).max(50).optional(),
    password: zod.string().min(3).optional()
})

router.put('/', authMiddleware, async(req, res) => {
    const { success, error } = updateBodySchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Invalid Input Format",
            error
        })
    }
    const userId = req.userId
    await User.updateOne({ _id: userId }, req.body)
    return res.json({
        message: "Updated Successfully"
    })
})

router.get('/bulk', authMiddleware, async(req, res) => {
    const filter = req.query.filter || ""
    
    const users = await User.find({
        $or: [
            {firstName:{"$regex": filter}},
            {lastName:{"$regex":filter}}
        ]
    })
    res.json({
        users: users.map(user => ({
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
        }))
    })     
})




module.exports = router