const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../routers/auth/auth-router.js');
const userRouter = require('../routers/users/users-router.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.get('/', (req,res) => {
    res.send('working...')
})

module.exports = server;