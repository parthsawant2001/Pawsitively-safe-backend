const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  registerUser,
  authUser,
  allUsers,
} = require('../controllers/userControllers');

// router.route('/').get(protect, allUsers);
router.route('/').post(registerUser);
router.post('/login', authUser);
router.get('/login');

module.exports = router;
