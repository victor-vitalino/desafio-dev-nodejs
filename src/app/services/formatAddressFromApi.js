function formatAddress(requestFullAdressFromApi) {
    const adressData = requestFullAdressFromApi.data.results[0].locations[0];

    return {
        street: adressData.street,
        neighborhood: adressData.adminArea6,
        city: adressData.adminArea5,
        state: adressData.adminArea3,
        country: adressData.adminArea1,
        postalCode: adressData.postalCode,
    };
}

export default formatAddress;
