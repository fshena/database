'use strict';
module.exports = (sequelize, DataTypes) => {
    let player = sequelize.define('Player', {
        user_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER(15),
            validate: {
                isNumeric: true,
            },
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null,
            validate: {
                isDate: true,
            },
        },
        height: {
            type: DataTypes.INTEGER(3),
            allowNull: true,
            defaultValue: null,
            validate: {
                isInt: true,
                max: 300,
            },
        },
        weight: {
            type: DataTypes.INTEGER(3),
            allowNull: true,
            defaultValue: null,
            validate: {
                isInt: true,
                max: 300,
            },
        },
    }, {
        freezeTableName: true,
        tableName: 'player',
        underscored: true,
    });

    player.associate = function(models) {
        player.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
    };

    // player.associate = function(models) {
    //     player.belongsToMany(models.Team, {
    //         through: models.TeamPlayer,
    //         foreignKey: 'player_id',
    //     });
    // };

    return player;
};
