import Sequelize, { Model } from 'sequelize';

class ComplaintAddress extends Model {
    static init(connection) {
        super.init(
            {
                street: Sequelize.STRING,
                neighborhood: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                country: Sequelize.STRING,
                postalCode: Sequelize.STRING,
            },
            { sequelize: connection }
        );
        return this;
    }
}

export default ComplaintAddress;
