const express = require('express');
const likes = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../database/sequelize')
const Likes = db.Likes;

likes.use(cors());

likes.post('/addLikes/:userId/:commentId',(req,res)=>{
    const likeData ={
        commentID: req.params.commentId,
        userId: req.params.userId,
        like:req.body.like
    }
    Likes.create(likeData).then((likes)=>{
        res.json(likes)
    })
})

likes.get('/like/:commentId',(req,res)=>{
    Likes.count({
        where:{
            commentID: req.params.commentId
        }
    }).then((count)=>{
        res.json(count)
    })

})
module.exports = likes