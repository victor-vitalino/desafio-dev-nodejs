module.exports = {
    dialect: 'sqlite',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    storage:
        process.env.NODE_ENV === 'test'
            ? './__tests__/database.sqlite'
            : './src/database/database.sqlite',
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    },
};
