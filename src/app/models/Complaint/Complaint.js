import Sequelize, { Model } from 'sequelize';

class Complaint extends Model {
    static init(connection) {
        super.init(
            {
                latitude: Sequelize.NUMBER,
                longitude: Sequelize.NUMBER,
            },
            { sequelize: connection }
        );
        return this;
    }

    static associate(models) {
        // association with address
        this.belongsTo(models.ComplaintAddress, {
            foreignKey: 'address_id',
            as: 'address',
        });

        this.belongsTo(models.ComplaintDescription, {
            foreignKey: 'description_id',
            as: 'description',
        });
        this.belongsTo(models.ComplaintInformer, {
            foreignKey: 'informer_id',
            as: 'informer',
        });
    }
}

export default Complaint;
