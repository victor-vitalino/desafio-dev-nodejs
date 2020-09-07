import ComplaintModel from '../models/Complaint/Complaint';

class ComplaintRepository {
    async create({ lat, lng, informer, description, address }) {
        const complaintFromDatabase = await ComplaintModel.create({
            latitude: lat,
            longitude: lng,
            informer_id: informer,
            description_id: description,
            address_id: address,
        });

        return complaintFromDatabase;
    }
}

export default new ComplaintRepository();
