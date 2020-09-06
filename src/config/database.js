module.exports = {
    dialect: 'sqlite',
    host: 'localhost',
    username: 'postgres',
    password: 'superuser',
    database: 'denunciations',
    storage: './src/database/database.sqlite',
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    },
};
