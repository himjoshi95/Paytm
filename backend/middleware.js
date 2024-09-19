const { JWT_SECRET } = require('./config')
const jwt = require('jsonwebtoken')


function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization
     
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({
            message: "Invalid Token-1"
        })
    }
    const token = authHeader.split(' ')[1]

    try {
        const decode = jwt.verify(token, JWT_SECRET)
        
        if (decode.userId) {
            req.userId = decode.userId
            next()
        } else {
            res.json({
                message:"Invalid token"
            })
        }
        
    } catch (e) {
        console.log(res.json({
            message: "Something went wrong"
        }))        
    }
}

module.exports = authMiddleware

