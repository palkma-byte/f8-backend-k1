"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password: bcrypt.hashSync("123456", saltRounds),
          name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete("Users", null, {});
  },
};
