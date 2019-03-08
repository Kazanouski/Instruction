'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('steps',{
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
    createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('steps')
  }
};
