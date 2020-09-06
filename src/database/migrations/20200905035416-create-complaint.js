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
                type: Sequelize.NUMBER,
                allowNull: false,
            },
            longitude: {
                type: Sequelize.NUMBER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                default: new Date(),
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                default: new Date(),
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable('complaints');
    },
};
