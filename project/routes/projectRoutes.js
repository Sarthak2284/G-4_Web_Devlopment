const express = require("express");
const { getProject } = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
// Route to get all projects
router.get("/", getProject);
// You can add more project-related routes here in the future
module.exports = router;
