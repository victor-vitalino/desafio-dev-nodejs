import Sequelize, { Model } from 'sequelize';

class ComplaintAddress extends Model {
    static init(connection) {
        super.init(
            {
                latitude: Sequelize.NUMBER,
                longitude: Sequelize.NUMBER,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE,
            },
            { sequelize: connection }
        );
        return this;
    }

    static associate(models) {
        // association with address
        this.belongsTo(models.ComplaintAddress, {
            foreignKey: 'address_id',
            as: 'complaint_address',
        });

        this.belongsTo(models.ComplaintDescription, {
            foreignKey: 'description_id',
            as: 'complaint_descriptions',
        });
        this.belongsTo(models.ComplaintInformer, {
            foreignKey: 'informer_id',
            as: 'complaint_informers',
        });
    }
}

export default ComplaintAddress;
