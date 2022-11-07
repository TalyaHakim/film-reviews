const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');
const userSchema = require('../models/user');
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator');

require('../config/db');

router.get('/', auth, async (req, res) => {
    try {
        
        const user = await userSchema.findById(req.user.id).select('-password');
        res.json(user);

    } catch (error) {
        console.log(error.msg)
        res.status(500).send('Server error')
    }
});

router.post('/', [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').exists()
], 
async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await userSchema.findOne({ email });

        if(!user){
            return res.status(400).json({ msg: 'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ msg: 'Invalid Credentials'});
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { 
                expiresIn: 360000
            },
            (err, token) => {
            if (err) throw err;
            res.json({token})
        }
        );

    } catch (error) {
        console.error(error.msg);
        res.status(500).send('Server error');
    }
});

module.exports = router; 