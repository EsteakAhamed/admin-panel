const User = require('../models/User');

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user by ID (Admin only)
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update user role (Admin only)
exports.updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        if (!['user', 'admin'].includes(role)) {
            return res.status(400).json({ success: false, message: 'Invalid role' });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { role },
            { new: true }
        ).select('-password');

        res.json({ success: true, message: 'Role updated', user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Suspend user (Admin only)
exports.suspendUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { status: 'suspended' },
            { new: true }
        ).select('-password');

        res.json({ success: true, message: 'User suspended', user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Activate user (Admin only)
exports.activateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { status: 'active' },
            { new: true }
        ).select('-password');

        res.json({ success: true, message: 'User activated', user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get current user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get dashboard stats (Admin only)
exports.getDashboardStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const adminCount = await User.countDocuments({ role: 'admin' });
        const suspendedCount = await User.countDocuments({ status: 'suspended' });
        const recentUsers = await User.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select('-password');

        res.json({
            success: true,
            stats: {
                totalUsers,
                adminCount,
                suspendedCount,
                activeUsers: totalUsers - suspendedCount,
                recentUsers,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};