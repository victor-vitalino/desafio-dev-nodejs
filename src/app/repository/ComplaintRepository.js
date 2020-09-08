import ComplaintModel from '../models/Complaint/Complaint';

class ComplaintRepository {
    async create({ latitude, longitude, informer, description, address }) {
        const complaintFromDatabase = await ComplaintModel.create({
            latitude,
            longitude,
            informer_id: informer,
            description_id: description,
            address_id: address,
        });

        return complaintFromDatabase;
    }
}

export default new ComplaintRepository();
