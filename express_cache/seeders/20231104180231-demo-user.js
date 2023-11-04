'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];

    for (let i = 1; i <= 5000; i++) {
      users.push({
        username: `user${i}`,
        name: `User ${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
