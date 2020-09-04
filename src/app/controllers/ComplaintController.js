import geolocationApi from '../services/geolocation-api';
import formatAddressFromApi from '../services/formatAddressFromApi';

const key = 'BJnaO7EBfX6YNAj6yccaWGGMCBUIY5lD';

class ComplaintController {
    async create(req, res) {
        const { latitude: lat, longitude: lng } = req.body;

        const requestFullAddressFromApi = await geolocationApi.get('/reverse', {
            params: {
                key,
                location: `${lat},${lng}`,
                includeRoadMetadata: true,
                includeNearestIntersection: true,
            },
        });

        const formatedAddress = formatAddressFromApi(requestFullAddressFromApi);
        if (formatedAddress.city === '' || formatedAddress.street === '') {
            return res.status(401).json({
                error: {
                    message: 'Endereço não encontrado para essa localidade.',
                    code: '02',
                },
            });
        }

        return res.status(200).json(formatedAddress);
    }
}

export default new ComplaintController();
