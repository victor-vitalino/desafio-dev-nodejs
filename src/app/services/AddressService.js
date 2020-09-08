import formatAddressFromApi from '../../utils/formatAddressFromApi';
import validateAddressFormatted from '../validator/ValidAddressFromApi';
import complaintErrors from '../../constants/complaintErrors';
import getAddressFromApi from '../subscribers/getAddressFromApi';

import Cache from '../../lib/Cache';

class AddressService {
    async run({ latitude, longitude }) {
        const cacheKey = `${latitude}:${longitude}`;
        const addressInCache = await Cache.get(cacheKey);

        if (addressInCache !== null) {
            return { addressData: addressInCache, cached: true };
        }

        const responseAddressFromApi = await getAddressFromApi({
            latitude,
            longitude,
        });

        const address = formatAddressFromApi(responseAddressFromApi);

        // checks if the address from api contains valid data
        if (!(await validateAddressFormatted(address))) {
            throw new Error(JSON.stringify(complaintErrors.addressNotFound));
        }

        return { addressData, cached: false };
    }
}

export default new AddressService();
