const Project = require("../models/projectModel");

const getProject = async(req,res)=>{
    const data = await Project.find({});

    return res.status(200).json({
        message: "All Projects",
        data
    });
}





module.exports = {
    getProject
};