"use strict";
const config = {
    username: 'root',
    password: '123456',
    database: 'Meals&Drinks',
    host: 'db',
    // (pode ser db nome do servico)
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map