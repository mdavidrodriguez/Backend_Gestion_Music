const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

// Se debe de pasar el objeto del usuario 
const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );

    return sign;

}


// Se debe de pasar el token de sesión
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (e) {
        return null;
    }
}


module.exports = { tokenSign, verifyToken }