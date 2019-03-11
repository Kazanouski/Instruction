'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',[{
      id:1,
      name: 'admin',
      email: 'admin@admin.com',
      password: '$2b$10$gxX1kw4JqQpEv.sfAbOsY.adcKZ20EwlQetWhuEzlLWriN4Xv4Dse'
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null,{})
  }
};
