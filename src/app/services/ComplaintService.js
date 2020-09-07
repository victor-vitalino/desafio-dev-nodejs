import getAddressFromApi from '../subscribers/getAddressFromApi';

import formatAddressFromApi from '../../utils/formatAddressFromApi';
import formatResponseToPt from '../../utils/formatResponseToPt';
import validateAddressFormatted from '../validator/ValidAddressFromApi';
import complaintErrors from '../../constants/complaintErrors';

import Informer from '../repository/InformerRepository';
import Description from '../repository/DescriptionRepository';
import Address from '../repository/AddressRepository';
import Complaint from '../repository/ComplaintRepository';

class ComplaintService {
    async create(data) {
        const {
            latitude: lat,
            longitude: lng,
            denunciante: informerData,
            denuncia: descriptionFromRequest,
        } = data;

        const { cpf, nome: name } = informerData;
        const {
            titulo: titleDescription,
            descricao: textDescription,
        } = descriptionFromRequest;

        let fullAddress = {};

        const responseAddressFromApi = await getAddressFromApi({
            lat,
            lng,
        });

        fullAddress = formatAddressFromApi(responseAddressFromApi);
        // checks if the address from api contains valid data
        if (!(await validateAddressFormatted(fullAddress))) {
            return res.status(401).json(complaintErrors.addressNotFound);
        }

        // saving data in parallel
        const resultAsyncs = await Promise.all([
            Informer.create({ cpf, name }),
            Address.create(fullAddress),
            Description.create({
                titleDescription,
                textDescription,
            }),
        ]);
        const [informer, address, description] = resultAsyncs;

        const complaint = await Complaint.create({
            lat,
            lng,
            informer: informer.id,
            description: description.id,
            address: address.id,
        });

        return formatResponseToPt({
            complaint,
            informer,
            descriptionFromRequest,
            address,
        });
    }
}

export default new ComplaintService();
