const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

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
            const salt = await bcrypt.genSalt(10);
            const hashPswd = bcrypt.hashSync(req.body.password, salt);
            req.body.password = hashPswd;
            const newUser = await User(req.body);
            newUser.save();
            res.send({
                success: true,
                message: 'User Registred Successfully'
            });
        }
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: error
        });
    }
});

module.exports = router;