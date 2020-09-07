import * as Yup from 'yup';

import complaintErrors from '../../constants/complaintErrors';

async function validateRequestComplaintBody(req, res, next) {
    // validate body from req to route of create complaint
    const validationBodySchema = Yup.object().shape({
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        denunciante: Yup.object({
            nome: Yup.string().required(),
            cpf: Yup.string().max(11),
        }).required(),
        denuncia: Yup.object({
            titulo: Yup.string().required(),
            descricao: Yup.string().required(),
        }).required(),
    });

    // if schema not valid
    if (!(await validationBodySchema.isValid(req.body))) {
        return res.status(400).json(complaintErrors.invalidDataRequest);
    }

    // schema valid
    next();
}

export default validateRequestComplaintBody;
