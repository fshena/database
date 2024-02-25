'use strict';

/**
 * Id primary key is created automatically
 * @param {Object} sequelize
 * @param {Object} DataTypes
 * @return {void|Model|*}
 */
module.exports = (sequelize, DataTypes) => {
    let user = sequelize.define('User', {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                is: ['^[a-zA-Z0-9\-_]+$', 'i'],
                len: [3, 100],
                notEmpty: true,
            },
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                is: ['^[a-zA-Z]+$', 'i'],
                len: [3, 100],
                notEmpty: true,
            },
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                is: ['^[a-zA-Z]+$', 'i'],
                len: [3, 100],
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                len: [6, 150],
                notEmpty: true,
            },
        },
        avatar: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: null,
            validate: {
                isUrl: true,
            },
        },
        role_id: {
            type: DataTypes.INTEGER(5),
            allowNull: false,
            defaultValue: 0,
            validate: {
                isInt: true,
                notEmpty: true,
            },
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            validate: {
                isBoolean: true,
                notEmpty: true,
            },
        },
    }, {
        freezeTableName: true, // does not use plural table name
        tableName: 'user', // define the table name
        underscored: true, // use underscore for createAt, updatedAt
    });

    user.associate = function(models) {
        user.belongsToMany(models.Company, {
            through: models.CompanyUser,
            foreignKey: 'user_id',
        });
    };

    return user;
};
