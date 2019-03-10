'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('likes',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    like: {
        type: Sequelize.INTEGER
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('likes')
  }
};
