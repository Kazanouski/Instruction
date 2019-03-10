const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Likes = sequelize.define('Likes',{
        id:{
            type: Sequelize.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        like: {
            type: Sequelize.INTEGER
        },
        commentID:{
            type: Sequelize.INTEGER
        },
        userId:{
            type: Sequelize.INTEGER
        },
    })
    Likes.associate = models => {
        Likes.belongsTo(models.Users)
        Likes.belongsTo(models.Comments)
    }
    return Likes
}
