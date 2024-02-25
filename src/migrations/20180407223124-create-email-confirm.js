'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('email_confirm', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(15),
            },
            user_id: {
                type: Sequelize.INTEGER(15),
                allowNull: false,
                unique: true,
            },
            token: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            expires: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('email_confirm');
    },
};
