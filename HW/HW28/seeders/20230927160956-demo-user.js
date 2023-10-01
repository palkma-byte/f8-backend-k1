'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'admin1',
     
      email: 'admin@gmail.com',
      password:"1",
      role:"1",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'admin2',
     
      email: 'admin2@gmail.com',
      password:"1",
      role:"0",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'admin3',
     
      email: 'admin3@gmail.com',
      password:"1",
      role:"0",
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
