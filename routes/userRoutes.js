const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
    try {
        const UserExist = await User.findOne({
            email: req.body.email
        });
        if (UserExist) {
            res.send({
                success: false,
                message: 'User Already Exists'
            })
        } else {
            const newUser = await User(req.body);
            newUser.save();
            res.send({
                success: true,
                message: 'User Registred Successfully'
            });
        }
    } catch (error) {
        res.send({
            success: false,
            message: error
        });
    }
});

module.exports = router;