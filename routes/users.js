const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');

require('../config/db');

const userSchema = require('../models/user');

router.post('/', [
    check('username', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().not().isEmpty(),
    check('password', 'Please enter a password with 5 or more characters').
    isLength({ max: 10, min: 5 })
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
      }

      const {username, email, password} = req.body;

      try {
        let user = await userSchema.findOne({ email });
        if(user){
            return res.status(400).json({ msg: 'User already exists'})
        }
        user = new userSchema({
            username,
            email,
            password
          })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    
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
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;