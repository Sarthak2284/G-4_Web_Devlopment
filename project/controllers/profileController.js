const Profile = require("../models/profileModel");


const getProfile = async (req,res)=>{
    const data = await Profile.find({});
    return res.status(200).json({ 
        message: "All Profiles",
        data
    });


}

const createProfile = async (req, res)=>{

    const {imageUrl, summary, skills, workExperience, linkedInUrl, githubUrl, codingPlatforms,s, resumeUrl} = req.body;
    
    const dataOfUser = req.user[0];
    // console.log(dataOfUser);
    
    const { _id} = dataOfUser;
    // console.log(_id);
    const checkUserId = await Profile.findOne({userId: _id});
    if(checkUserId){
        return res.status(400).json({message : "profile already exist"});
    }
    
    

    if(!imageUrl || !summary || !skills || !workExperience || !linkedInUrl || !githubUrl || !codingPlatforms || !resumeUrl){
        return res.status(400).json({message : "Please add all mandatory fields"});
    }

    const newProfile = await Profile.create({
        userId: _id,
        imageUrl,
        summary,
        skills,
        workExperience,
        linkedInUrl,
        githubUrl,
        codingPlatforms,
        resumeUrl
    })

    const data = await newProfile.save();

    return res.status(200).json({message : "Profile Created",
        data
    })
}
const updateProfile = async (req, res) => {
    const { imageUrl, summary, skills, workExperience, linkedInUrl, githubUrl, codingPlatforms, resumeUrl } = req.body;

    if (!req.user) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    // Adjust here depending on whether req.user is object or array
    const userObject = Array.isArray(req.user) ? req.user[0] : req.user;

    if (!userObject) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const { _id } = userObject;

    const checkUserId = await Profile.findOne({ userId: _id });
    if (!checkUserId) {
        return res.status(400).json({ message: "profile does not exist" });
    }
    if (!imageUrl || !summary || !skills || !workExperience || !linkedInUrl || !githubUrl || !codingPlatforms || !resumeUrl) {
        return res.status(400).json({ message: "Please add all mandatory fields" });
    }
    const updatedProfile = await Profile.findOneAndUpdate(
        { userId: _id },
        {
            imageUrl,
            summary,
            skills,
            workExperience,
            linkedInUrl,
            githubUrl,
            codingPlatforms,
            resumeUrl
        },
        { new: true }
    );
    return res.status(200).json({
        message: "Profile Updated",
        data: updatedProfile
    });
};


module.exports = {getProfile,createProfile,updateProfile};