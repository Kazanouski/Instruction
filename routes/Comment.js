const express = require('express');
const comments = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../database/sequelize')
const Comments = db.Comments;

comments.use(cors());

comments.post('/comments/:manualId',(req,res)=>{
    const commentData={
        manualId : req.params.manualId,
        comment : req.body.comment
    }
    Comments.create(commentData).then((comments=>{
        res.json(comments)
    }))
})

comments.get('/comments/:manualId',(req,res)=>{
    Comments.findAll({
        where:{
            manualId: req.params.manualId
        }
    }).then(comments=>{
        res.json(comments)
    })
})

comments.get('/commentsCount/:manualId',(req,res)=>{
    Comments.count({
        where:{
            manualId: req.params.manualId
        }
    }).then((count)=>{
        res.json(count)
    })
})

module.exports = comments