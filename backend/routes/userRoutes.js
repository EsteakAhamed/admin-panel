const express = require('express');
const { getAllUsers, getUserById, updateUserRole, suspendUser, activateUser, getDashboardStats, } = require('../controllers/userController');
const { verifyJWT } = require('../middleware/authMiddleware');
const { roleCheck } = require('../middleware/roleMiddleware');

const router = express.Router();

// Admin only routes
router.get('/stats', verifyJWT, roleCheck(['admin']), getDashboardStats);
router.get('/', verifyJWT, roleCheck(['admin']), getAllUsers);
router.get('/:id', verifyJWT, roleCheck(['admin']), getUserById);
router.put('/:id/role', verifyJWT, roleCheck(['admin']), updateUserRole);
router.put('/:id/suspend', verifyJWT, roleCheck(['admin']), suspendUser);
router.put('/:id/activate', verifyJWT, roleCheck(['admin']), activateUser);

module.exports = router;