'use strict';

let faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        let teams = [];
        for (let i = 0; i < 100; i++) {
            teams.push({
                name: faker.internet.userName(),
                logo: faker.image.sports(),
                created_at: faker.date.past(),
                updated_at: faker.date.past(),
            });
        }

        return queryInterface.bulkInsert('team', teams, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('team', null, {});
    },
};
