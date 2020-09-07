function formatAddress(requestFullAddressFromApi) {
    const [results] = requestFullAddressFromApi.data.results;
    const [addressData] = results.locations;

    return {
        street: addressData.street,
        neighborhood: addressData.adminArea6,
        city: addressData.adminArea5,
        state: addressData.adminArea3,
        country: addressData.adminArea1,
        postal_code: addressData.postalCode,
    };
}

export default formatAddress;
