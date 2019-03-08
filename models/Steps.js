const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Steps = sequelize.define('Steps',{
        id:{
            type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        step:{
            type: Sequelize.INTEGER
        },
        photo:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.TEXT
        },
        manualId:{
            type: Sequelize.INTEGER
        }
    })
    Steps.associate = models=>{
        Steps.belongsTo(models.Manuals)
    }
    return Steps
}
