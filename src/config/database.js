require('dotenv').config({path: process.env.npm_package_config_envFilePath});

let Sequelize = require('sequelize');

const config = {
    dev: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOSTNAME,
        dialect: 'mysql',
        logging: console.log,
        operatorsAliases: Sequelize.Op
    },
    test: {
        username: process.env.TEST_DB_USERNAME,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        host: process.env.TEST_DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        operatorsAliases: Sequelize.Op
    },
    prod: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
        operatorsAliases: Sequelize.Op
    },
};

module.exports = config[process.env.NODE_ENV];
