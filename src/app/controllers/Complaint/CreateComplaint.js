import ComplaintService from '../../services/ComplaintService';

class CreateComplaint {
    async create(req, res) {
        try {
            const response = await ComplaintService.create(req.body);

            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

export default new CreateComplaint().create;
