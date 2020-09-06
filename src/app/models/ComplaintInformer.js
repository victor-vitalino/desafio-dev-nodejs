import Sequelize, { Model } from 'sequelize';

class ComplaintInformer extends Model {
    static init(connection) {
        super.init(
            {
                name: Sequelize.STRING,
                cpf: Sequelize.STRING,
            },
            { sequelize: connection }
        );
        return this;
    }
}

export default ComplaintInformer;
