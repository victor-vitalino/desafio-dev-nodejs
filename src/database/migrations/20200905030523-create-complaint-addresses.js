module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('complaint_addresses', {
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
            neighborhood: Sequelize.STRING,
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            postal_code: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable('complaint_addresses');
    },
};
