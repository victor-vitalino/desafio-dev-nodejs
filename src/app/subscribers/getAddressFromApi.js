import geolocationApi from '../../services/geolocation-api';

async function getAddressFromApi({ latitude, longitude }) {
    const requestFullAddressFromApi = await geolocationApi.get('/reverse', {
        params: {
            key: process.env.API_GEO_KEY,
            location: `${latitude},${longitude}`,
            includeRoadMetadata: true,
            includeNearestIntersection: true,
        },
    });
    return requestFullAddressFromApi;
}

export default getAddressFromApi;
