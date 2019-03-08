const Sequelize = require('sequelize');
const db = require('../database/sequelize')

module.exports = () => {
    const Role = db.define('role',{
        id:{
            type: Sequelize.UUID,
                primaryKey: true,
                autoIncrement: true
        },
        name:{
            type: Sequelize.STRING
        }
    })
    return Role
}
