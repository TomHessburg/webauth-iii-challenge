const express = require('express');
const router = express.Router();
const db = require('../../data/knexConfig.js');
const bcrypt = require('bcrypt');

//const jwt = require('jsonwebtoken');
//const secret = require('../api/secrets.js').jwtSecret;



router.get('/', (req,res) => {
    db('users')
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err))
})

module.exports = router;