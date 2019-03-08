'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('Steps','manualId',{
        type: Sequelize.INTEGER,
        onDelete:'cascade',
        references:{
          model: 'Manuals',
          key:'id'
        }
      })
    .then(()=>{
      return queryInterface.addColumn('Comments','manualId',{
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references:{
          model: 'Manuals',
          key: 'id'
        }
      })
    }) 
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('Steps','manualId')
      .then(()=>{
        return queryInterface.removeColumn('Comments','manualId')
      })
  
  }
};
