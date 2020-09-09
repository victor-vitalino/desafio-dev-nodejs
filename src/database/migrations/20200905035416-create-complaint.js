module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('complaints', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            latitude: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            longitude: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable('complaints');
    },
};
