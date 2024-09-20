const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware')
const { Account } = require('../db')
const zod = require('zod')
const mongoose = require('mongoose')

router.get('/balance', authMiddleware, async(req, res) => {
    
    const user = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: user.balance
    })

})

const sendMoneySchema = zod.object({
    amount:zod.number()
})
router.post('/transfer', authMiddleware, async(req, res) => {    
    const { success, error } = sendMoneySchema.safeParse({amount: req.body.amount }) 
    if (!success) {
        return res.status(411).json({
            message: "Invalid Amount Entered",
            error
        })
    }

    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount,to} = req.body
    const account = await Account.findOne({
        userId:req.userId
    }).session(session)

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.json(400).json({
            message: "Insufficient Balance"
        })
    }

    const toAccount = await Account.findOne({
        userId : to
    }).session(session)

    if (!toAccount) {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Invalid Account"
        })
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session)
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session)
    
    await session.commitTransaction()
    res.json({
        message:"Transfer successful"
    })
    
})







module.exports = router 