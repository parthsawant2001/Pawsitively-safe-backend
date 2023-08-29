const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
// const {
//   registerUser,
//   authUser,
//   allUsers,
// } = require('../controllers/userControllers');

router.get('/');

module.exports = router;
