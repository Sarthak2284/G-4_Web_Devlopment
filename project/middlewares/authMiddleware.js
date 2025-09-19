const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); 


const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token missing or malformed" });
    }

    const userData = jwt.verify(token, process.env.JWT_SECRET);

    if (!userData) {
      return res.status(401).json({ message: "Unauthorized User" });
    }

    // Assuming userData contains userId directly
    const {_id} = userData.user; 

    

    const user = await User.find({ _id });

    console.log(user);

    if(user.length === 0)  return res.status(404).json({ message: "User not found" });   
    req.user = user    
    next(); 
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", error: error.message });
  }
};

module.exports = authMiddleware;    