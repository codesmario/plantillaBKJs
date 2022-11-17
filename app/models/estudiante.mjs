'use strict';

import psql from "sequelize";
import DB from '../core/Connection.mjs'

class Estudiante extends psql.Model {
  static associate() { }
}

Estudiante.init(
  {
    f_name: {
      type: psql.Sequelize.STRING,
    },
    l_name: {
      type: psql.Sequelize.STRING,
    },
    email: {
      type: psql.Sequelize.STRING,
    },
    phone: {
      type: psql.Sequelize.INTEGER,
    },

    birthday: {
      type: psql.Sequelize.DATE,
    },
  }, {
  sequelize: DB.connect(),
  tableName: 'mnt_estudiantes',
  timestamps: false,
});

export default Estudiante;