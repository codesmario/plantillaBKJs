
import Sequelize from 'sequelize'

export const sequelize = new Sequelize ('database','user', 'pass', {
	host:'localhost',
	port:'5432',
	dialect:'postgres'
});
