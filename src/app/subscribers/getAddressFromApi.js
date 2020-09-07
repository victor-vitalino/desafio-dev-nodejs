import geolocationApi from '../../services/geolocation-api';

const key = 'BJnaO7EBfX6YNAj6yccaWGGMCBUIY5lD';

async function getAddressFromApi({ lat, lng }) {
    const requestFullAddressFromApi = await geolocationApi.get('/reverse', {
        params: {
            key,
            location: `${lat},${lng}`,
            includeRoadMetadata: true,
            includeNearestIntersection: true,
        },
    });
    return requestFullAddressFromApi;
}

export default getAddressFromApi;
