module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('complaints', 'description_id', {
            type: Sequelize.INTEGER,
            references: { model: 'complaint_description', key: 'id' },
            onUpdate: 'cascade',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('complaints', 'description_id');
    },
};
