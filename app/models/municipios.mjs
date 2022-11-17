'use strict';

import psql from 'sequelize'
import DB from '../core/Connection.mjs'
import Departamentos from './departamentos.mjs';

class Municipios extends psql.Model {
  static associate() { 
    this.belongsTo(Departamentos, { foreignKey: 'id_departamento' });
  }
}

Municipios.init({
  name:
  {
    type: psql.Sequelize.STRING,
  },
  id_departamento:
  {
    type: psql.Sequelize.INTEGER,
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
  tableName: 'ctl_municipios',
});

export default Municipios;