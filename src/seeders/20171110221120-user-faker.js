'use strict';

let faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        let users = [];
        for (let i = 0; i < 100; i++) {
            users.push({
                username: faker.internet.userName(),
                first_name: faker.name.findName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                avatar: faker.image.avatar(),
                role_id: faker.random.number(4),
                is_active: faker.random.boolean(),
                created_at: faker.date.past(),
                updated_at: faker.date.past(),
            });
        }

        return queryInterface.bulkInsert('user', users, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user', null, {});
    },
};
