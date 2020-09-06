import Sequelize, { Model } from 'sequelize';

class ComplaintDescription extends Model {
    static init(connection) {
        super.init(
            {
                title: Sequelize.STRING,
                description: Sequelize.STRING,
            },
            { sequelize: connection }
        );
        return this;
    }
}

export default ComplaintDescription;
