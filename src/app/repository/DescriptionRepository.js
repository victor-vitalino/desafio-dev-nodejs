import ComplaintDescriptionModel from '../models/Complaint/ComplaintDescription';

class DescriptionRepository {
    async create({ title, description }) {
        const descriptionFromDatabase = await ComplaintDescriptionModel.create({
            title,
            description,
        });

        return descriptionFromDatabase;
    }
}

export default new DescriptionRepository();
