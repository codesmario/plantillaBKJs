import { Sequelize } from "sequelize";
import configDB from '../database/config/config.cjs'

export default class Connection {
  static connect() {
    return new Sequelize(
      configDB.development.database, 
      configDB.development.username,
      configDB.development.password, {
        host: configDB.development.host,
        port: configDB.development.port,
        dialect: configDB.development.dialect,
        logging: false,
      }
    );
  }
}