const express = require('express');
const manuals = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../database/sequelize')
const Manual = db.Manuals;
const User = db.Users;

process.env.SECRET_KEY = 'secret';

manuals.use(cors());

manuals.post('/add/:userId',(req,res)=>{
    
    const manualData ={
        name: req.body.name,
        description: req.body.description,
        userId: req.params.userId
        } 
            Manual.create(manualData).then((manual)=>{
                res.json(manual)
            })
            .catch(err=>{
                res.send(err)
        })
        
})

manuals.get('/userManuals/:userId',(req,res)=>{
    Manual.findAll({
        where:{
            userId: req.params.userId
        }
    }).then(manual=>{res.json(manual)})
})

manuals.get('/allManuals',(req,res)=>{
    Manual.findAll({
        order:[['updatedAt', 'DESC']]
    }).then((manual)=>{
        res.json(manual)
    })
})

manuals.get('/manual/:id/:step', (req,res)=>{
    Manual.findById(req.params.id,{
        where:{
            step:req.params.step
        }
    }).then((manual)=>{
        res.json(manual)
    })
})

manuals.get('/manual/:name', (req,res)=>{
    Manual.findOne({
        where:{
            name: req.params.name
        }
    }).then(manual=>{
        res.json(manual)
    })
})



module.exports = manuals;

