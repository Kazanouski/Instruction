const Sequelize = require('sequelize');

const sequelize = new Sequelize('Sharing','root','password',{
    host:'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool:{
        max:10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const db={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require('../models/Users')(sequelize,Sequelize)
db.Manuals = require('../models/Manuals')(sequelize,Sequelize)
db.Steps = require('../models/Steps')(sequelize,Sequelize)
db.Comments = require('../models/Comments')(sequelize,Sequelize)
db.Likes = require('../models/Likes')(sequelize,Sequelize)
db.Topics = require('../models/Topics')(sequelize,Sequelize)

module.exports = db;