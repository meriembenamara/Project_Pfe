//const jwt = require('jsonwebtoken');

//const secretKey = 'MERIEM';

//function authenticateToken(req, res, next) {
    //const authHeader = req.headers['authorization'];
   // const token = authHeader && authHeader.split(' ')[1];
   // if (token == null) return res.sendStatus(401);

   // jwt.verify(token, secretKey, (err, user) => {
        //if (err) return res.sendStatus(403);
       // req.user = user;
        //next();
   // });
//}

//module.exports =  { authenticateToken,secretKey };
// middleware/auth.js
const User = require("../Models/UserModel");
const jwt = require('jsonwebtoken');
const AUTH_SECRET = "your_jwt_secret"
const auth = async(req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request, Token not found.",
            });
        }
        token = token.split(" ")[1];
        const decodedValue = jwt.verify(token,AUTH_SECRET );
        const id = decodedValue._id ? decodedValue._id : decodedValue.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request, Either user not found or invalid token",
            });
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ success: false, errMessage: err });
    }
};


const admin = (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
    next();
};

module.exports = { auth, admin, AUTH_SECRET };
