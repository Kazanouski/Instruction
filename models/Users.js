const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
   const Users =  sequelize.define('Users',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        confirmEmail:{
            type:Sequelize.BOOLEAN
        }
    })
    Users.associate = models => {
        Users.hasMany(models.Manuals,{onDelete:'cascade'})
    }
    return Users;
}
 
    