module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('complaints', 'informer_id', {
            type: Sequelize.INTEGER,
            references: { model: 'complaint_informers', key: 'id' },
            onUpdate: 'cascade',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('complaints', 'informer_id');
    },
};
