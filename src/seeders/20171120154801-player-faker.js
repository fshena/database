'use strict';

let faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        let players = [];
        for (let i = 0; i < 100; i++) {
            players.push({
                user_id: i,
                birthday: faker.date.past(),
                height: faker.random.number({min: 150, max: 190}),
                weight: faker.random.number({min: 50, max: 100}),
                created_at: faker.date.past(),
                updated_at: faker.date.past(),
            });
        }
        return queryInterface.bulkInsert('player', players, {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('player', null, {});
    },
};
