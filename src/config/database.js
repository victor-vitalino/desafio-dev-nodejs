require('dotenv/config');

module.exports = {
    dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    storage:
        process.env.NODE_ENV === 'test' ? './__tests__/database.sqlite' : '',
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    },
};
