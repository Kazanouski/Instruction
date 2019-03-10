const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
   const Comments = sequelize.define('Comments',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: Sequelize.TEXT
        },
        manualId:{
            type: Sequelize.INTEGER
        }
    })
    Comments.associate = model =>{
        Comments.belongsTo(model.Manuals)
        Comments.hasMany(models.Likes,{onDelete:'cascade'})
    }
    return Comments;
}
 
    