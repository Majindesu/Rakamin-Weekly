'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todolist', [
      {
        activity: 'Do Week 11 RAKAMIN Assignments',
        description: 'Make sure to finish Week 11 Rakamin Assignment on Unit Testing and Docker Practice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activity: 'Work on EcoRoute Project Website',
        description: 'Continue working on EcoRoute Project Website (due end of october)',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('todolist', null, {});
  }
};
