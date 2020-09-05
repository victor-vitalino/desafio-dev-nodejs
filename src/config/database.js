module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'superuser',
    database: 'denunciations',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
