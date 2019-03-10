const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Manuals = sequelize.define('Manuals',{
        id:{
            type: Sequelize.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.TEXT
        },
        photo:{
            type: Sequelize.STRING
        },
        userId:{
            type: Sequelize.INTEGER
        },
        topicName:{
            type: Sequelize.STRING
        }
    })
    Manuals.associate = models => {
        Manuals.belongsTo(models.Users)
        Manuals.hasMany(models.Steps,{onDelete:'cascade'})
        Manuals.hasMany(models.Comments,{onDelete:'cascade'})
        Manuals.belongsTo(models.Topics)
    }
    return Manuals
}
