const express = require('express');
const router = express.Router();
const db = require('../../data/knexConfig.js');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const secret = require('../../server/secrets.js').jwtSecret;



router.post('/register', (req,res) => {
    let user = req.body
    user.password = bcrypt.hashSync(user.password, 8);
    console.log(user);

    db('users')
        .insert(user)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json({errMessage: "there as an error retrieving your resources, either you havent completed the form or that username is already taken..."}))
})

router.post('/login', (req,res) => {

    const { username, password } = req.body
    db('users')
        .where({ username })
        .first()
        .then(user => {
            if(bcrypt.compareSync(password, user.password)){
                const token = generateToken(user)
                res.status(200).json({
                    message: "welcome back!",
                    token
                });
            }else{
                res.status(401).json({message: "invalid credentials"})
            }
        })
        .catch(err => res.status(500).json({errMessage: "unable to login"}))
})

function generateToken(user){
    const payload = {
      subject: user.id,
      username: user.username,
      department: user.department
    };
    const options = {
      expiresIn: '1h'
    };
    
    return jwt.sign(payload, secret, options)
  }

module.exports = router;