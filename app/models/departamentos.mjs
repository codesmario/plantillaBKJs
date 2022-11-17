'use strict';

import psql from 'sequelize'
import DB from '../core/Connection.mjs'
import Municipios from './municipios.mjs';

class Departamentos extends psql.Model {
  static associate() {
    this.hasMany(Municipios, {
      foreignKey: 'id_departamento'
    })
  }
}

Departamentos.init({
  name:
  {
    type: psql.Sequelize.STRING,
  },
  codigo:
  {
    type: psql.Sequelize.STRING,
  },
  createdAt: {
    type: psql.Sequelize.DATE,
  },
  updatedAt: {
    type: psql.Sequelize.DATE,
  }
}, {
  timestamps: false,
  sequelize: DB.connect(),
  tableName: 'departamentos',
});

export default Departamentos;