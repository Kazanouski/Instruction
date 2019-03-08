'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', { 
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
          type: Sequelize.BOOLEAN,
          defaultValue: false
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
      });
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
  }
};
