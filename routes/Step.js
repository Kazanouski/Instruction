const express = require('express');
const steps = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../database/sequelize')
const Steps = db.Steps;

steps.use(cors());

steps.post('/addSteps/:manualId',(req,res)=>{
    const stepData={
        description: req.body.description,
        step: req.body.step,
        manualId: req.params.manualId
    }
    Steps.create(stepData).then(step=>{
        res.json(step)
    })
    .catch(err=>{
        res.send(err)
    })
})

steps.get('/steps/:manualId/:step',(req,res)=>{
    Steps.findOne({
        where:{
            manualId: req.params.manualId,
            step: req.params.step
        }
    }).then(step=>{
        res.json(step)
    })
})

steps.get('/steps/:manualId',(req,res)=>{
    Steps.count({
        where:{
            manualId: req.params.manualId
        }
    }).then((count)=>{
        res.json(count)
    })
})


module.exports = steps