'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Manuals','topicName',{
      type: Sequelize.STRING,
      onDelete:'cascade',
      references:{
        model: 'topics',
        key:'name'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Manuals','topicName')
  }
};
