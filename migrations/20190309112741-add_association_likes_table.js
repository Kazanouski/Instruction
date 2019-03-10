'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Likes','commentId',{
      type: Sequelize.INTEGER,
      onDelete:'cascade',
      references:{
        model: 'Comments',
        key:'id'
      }
    })
    .then(()=>{
      return queryInterface.addColumn('Likes','userId',{
        type: Sequelize.INTEGER,
        onDelete:'cascade',
        references:{
          model: 'Users',
          key:'id'
        }
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Likes','commentId')
    .then(()=>{
      return queryInterface.removeColumn('Likes','userId')
    })
  }
};
