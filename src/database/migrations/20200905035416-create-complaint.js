module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('complaints', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            latitude: {
                type: Sequelize.NUMBER,
                allowNull: false,
            },
            longitude: {
                type: Sequelize.NUMBER,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable('complaints');
    },
};
