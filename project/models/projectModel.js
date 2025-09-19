const mongoose = require('mongoose');

const ProjectModel = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId},
    imageUrl: {type: String, required: true},
    projectOwner: {type: String, required: true},
    projectTitle: {type: String, required: true},
    descriptiopn : {type: String, required: true},
    techStck: {type: [String], required: true},
    experienceLevel: {type: String,enum:["Entry","Intermediate","Expert"], required: true},
    projectContributor: {type: [String]},
    isActive: {type: Boolean, default: true},


},
{timestamps: true});

module.exports = mongoose.model("Project", ProjectModel);

