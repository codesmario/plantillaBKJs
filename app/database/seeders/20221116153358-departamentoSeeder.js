module.exports = {
  up: async (queryInterface) => {

    const t = await queryInterface.sequelize.transaction();
    await queryInterface.bulkInsert(
      'departamentos',
      [
        {
          id: 1,
          name: 'Ahuachapán',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Cabañas',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Chalatenango',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Cuscatlán',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'La Libertad',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: 'Morazán',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: 'La Paz',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name: 'Santa Ana',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          name: 'San Miguel',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          name: 'San Salvador',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          name: 'San Vicente',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          name: 'Sonsonate',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          name: 'La Unión',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          name: 'Usulutá',
          codigo: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {
        transaction: t,
      });

    await queryInterface.bulkInsert(
      'municipios',
      [
        {
          name: 'Ahuachapán',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Apaneca',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Atiquizaya',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Concepción de Ataco',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'El Refugio',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guaymango',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jujutla',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'San Francisco Menéndez',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'San Lorenzo',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'San Pedro Puxtla',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tacuba',
          id_departamento: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Turín',
          id_departamento: 1,
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
