import getAddressFromApi from '../../services/getAddressFromApi';
import formatAddressFromApi from '../../services/formatAddressFromApi';
import validateAddressFormatted from '../../validator/ValidAddressFromApi';

class CreateComplaint {
    async create(req, res) {
        const { latitude: lat, longitude: lng } = req.body;

        const responseAddressFromApi = await getAddressFromApi({ lat, lng });
        const formattedAddress = formatAddressFromApi(responseAddressFromApi);

        if (!(await validateAddressFormatted(formattedAddress))) {
            return res.status(401).json({
                error: {
                    message: 'Endereço não encontrado para essa localidade.',
                    code: '02',
                },
            });
        }

        return res.status(200).json(formattedAddress);
    }
}

export default new CreateComplaint().create;
