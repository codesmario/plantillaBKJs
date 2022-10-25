'use strict';
import psql from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Carrera extends psql.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carrera.init({
    name: {
      type: psql.Sequelize.STRING
    },
    siglas: {
      type: psql.Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'Carreras',
  });
  return Carrera;
};