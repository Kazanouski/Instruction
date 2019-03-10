const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
    const Topics = sequelize.define('Topics',{
        name:{
            type: Sequelize.STRING,
                primaryKey: true,
        },
    })
    Topics.associate = models=>{
        Topics.hasMany(models.Manual,{onDelete:'cascade'})
    }
    return Topics
}
