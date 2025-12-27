const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const { verifyJWT } = require('../middleware/authMiddleware');
const { getProfile } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyJWT, logout);
router.get('/profile', verifyJWT, getProfile);

module.exports = router;