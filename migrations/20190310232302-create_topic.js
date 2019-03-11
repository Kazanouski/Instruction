'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('topics',[{
      name: 'Build'
    },
    {
      name: 'Sport'
    },
    {
      name: 'Programming'
    },
    {
      name: 'Science'
    },
    {
      name: 'Cinema'
    },
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('topics',null,{})
  }
};
