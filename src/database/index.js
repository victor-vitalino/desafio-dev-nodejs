import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import ComplaintAddress from '../app/models/Complaint/ComplaintAddress';
import ComplaintInformer from '../app/models/Complaint/ComplaintInformer';
import ComplaintDescription from '../app/models/Complaint/ComplaintDescription';
import Complaint from '../app/models/Complaint/Complaint';

// models

const models = [
    ComplaintAddress,
    ComplaintDescription,
    ComplaintInformer,
    Complaint,
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
