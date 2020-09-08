import ComplaintService from '../../services/ComplaintService';

class CreateComplaint {
    async create(req, res) {
        try {
            const response = await ComplaintService.run(req.body);

            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json(JSON.parse(error.message));
        }
    }
}

export default new CreateComplaint().create;
