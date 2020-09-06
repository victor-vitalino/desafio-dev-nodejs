import * as Yup from 'yup';

async function validateRequestBody(address) {
    // validate body from req to route of create complaint
    const validationBodySchema = Yup.object().shape({
        street: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        country: Yup.string().required(),
    });

    // if schema valid
    if (await validationBodySchema.isValid(address)) {
        return true;
    }

    // schema invalid
    return false;
}

export default validateRequestBody;
