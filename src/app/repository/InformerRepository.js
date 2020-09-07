import ComplaintInformerModel from '../models/Complaint/ComplaintInformer';

class InformerRepository {
    async create({ cpf, name }) {
        const [
            informerFromDatabase,
        ] = await ComplaintInformerModel.findOrCreate({
            where: { cpf },
            defaults: { cpf, name },
        });

        return informerFromDatabase;
    }
}

export default new InformerRepository();
