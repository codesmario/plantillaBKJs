'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await [
      queryInterface.addColumn('mnt_carreras', 'codigo', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('mnt_carreras', 'municipio', {
        type: Sequelize.INTEGER,
      }),
    ]

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await [
      queryInterface.removeColumn('mnt_carreras', 'codigo'),
      queryInterface.removeColumn('mnt_carreras', 'municipio')
    ]
  }
};
