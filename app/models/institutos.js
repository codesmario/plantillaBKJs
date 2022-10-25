'use strict';
import psql from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class Institutos extends psql.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Institutos.init({
    name: psql.Sequelize.STRING
  }, {
    sequelize,
    modelName: 'Institutos',
  });
  return Institutos;
};