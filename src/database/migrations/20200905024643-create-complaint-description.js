module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('complaint_descriptions', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
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
        return queryInterface.dropTable('complaint_descriptions');
    },
};
