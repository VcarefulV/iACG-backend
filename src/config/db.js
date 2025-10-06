import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('iacg_db', 'iacg_user', 'Ljy050828', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelize;
