const express = require('express');
const { getProfile, createProfile} = require('../controllers/profileController');

const router = express.Router();

router.get('/user', getProfile);
router.post('/create', createProfile);


module.exports = router;