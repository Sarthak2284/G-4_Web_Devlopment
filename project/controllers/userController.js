const User = require('../models/userModel'); // Assuming you have a User model defined in models/userModel.js
const registerUser = async (req,res)=>{
    try{
        const { firstName, lastName, email, password} = req.body;
        if(!firstName || !email || !password){
            return res.status(400).send({message: 'Please fill all the required fields'});
        }
        const userExist = await User.finOne({email});
        if(userExist){
            return res.status(400).json("ALREADY EXISTS: ", {userExist});
        }

        const newUser = await User.create({
            firstName, lastName, email, password
        });


        await newUser.save();

        res.status(201).json("USER ADDED",{newUser})
    }catch(err){
        console.error('Error in registerUser:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = { registerUser }