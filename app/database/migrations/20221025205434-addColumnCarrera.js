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
      queryInterface.addColumn('Carreras', 'codigo', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Carreras', 'municipio', {
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
      queryInterface.removeColumn('Carreras', 'codigo'),
      queryInterface.removeColumn('Carreras', 'municipio')
    ]
  }
};
