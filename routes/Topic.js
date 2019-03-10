const express = require('express');
const topics = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../database/sequelize')
const Topics = db.Topics;

topics.use(cors());


topics.get('/topic',(req,res)=>{
    Topics.findAll().then((topic)=>{
        res.json(topic)
    })
})

module.exports = topics