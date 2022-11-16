module.exports = {
  up: async (queryInterface) => {

    const t = await queryInterface.sequelize.transaction();
    await queryInterface.bulkInsert(
      'departamentos',
      [
        {
          id: 1,
          name: 'SANTA ANA',
          codigo: 'SA',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {
        transaction: t,
      });
    try {
      await t.commit();
    } catch (error) {
      console.log('[Error] seeder departamentos: ', error);
      await t.rollback();
    }

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('departamentos', null, {});
  }

};
