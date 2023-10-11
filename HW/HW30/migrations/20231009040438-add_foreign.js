'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    
      await queryInterface.changeColumn(
        'users',
        'provider_id',
        {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,references:{
            model: {
              tableName:"providers",
            },
            key:"id"
          }
        },
        { transaction }
      );
  },
  
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
