import ComplaintAddressModel from '../models/Complaint/ComplaintAddress';

class AddressRepository {
    async create(fullAddress) {
        const [addressFromDatabase] = await ComplaintAddressModel.findOrCreate({
            where: {
                street: fullAddress.street,
                neighborhood: fullAddress.neighborhood,
            },
            defaults: fullAddress,
        });

        return addressFromDatabase;
    }
}

export default new AddressRepository();
