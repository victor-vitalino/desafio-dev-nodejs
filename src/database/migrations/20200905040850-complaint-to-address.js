module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('complaints', 'address_id', {
            type: Sequelize.INTEGER,
            references: { model: 'complaint_addresses', key: 'id' },
            onUpdate: 'cascade',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('complaints', 'address_id');
    },
};
