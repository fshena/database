'use strict';

let faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        let relations = [];
        for (let i = 0; i < 100; i++) {
            relations.push({
                company_id: faker.random.number({'min': 1, 'max': 100}),
                user_id: faker.random.number({'min': 1, 'max': 100}),
                is_active: faker.random.boolean(),
                created_at: faker.date.past(),
                updated_at: faker.date.past(),
            });
        }
        return queryInterface.bulkInsert('company_user', relations, {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('company_user');
    },
};
