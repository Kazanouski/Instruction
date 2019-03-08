'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role',{
      id:{
        type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
    },
    name:{
        type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('role');
    
  }
};
