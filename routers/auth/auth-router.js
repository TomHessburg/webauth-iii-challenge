const express = require('express');
const router = express.Router();
const db = require('../../data/knexConfig.js');

router.get('/', (req,res) => {
    db('users')
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json({errMessage: "there as an error retrieving your resources..."}))
})

module.exports = router;