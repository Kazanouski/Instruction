const Sequelize = require('sequelize');
const db = require('../database/sequelize')

module.exports = () =>{
    const Topic = db.define('topic',{
        id:{
            type: Sequelize.UUID,
                primaryKey: true,
                autoIncrement: true
        },
        name:{
            type: Sequelize.STRING
        }
    })
    return Topic
}
