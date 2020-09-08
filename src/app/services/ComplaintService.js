import AddressService from './AddressService';

import formatResponseToPt from '../../utils/formatResponseToPt';

import InformerRepository from '../repository/InformerRepository';
import DescriptionRepository from '../repository/DescriptionRepository';
import AddressRepository from '../repository/AddressRepository';
import Complaint from '../repository/ComplaintRepository';

class ComplaintService {
    async run({
        latitude,
        longitude,
        denunciante: informerData,
        denuncia: descriptionFromRequest,
    }) {
        let address;

        const { addressData, cached } = await AddressService.run({
            latitude,
            longitude,
        });

        // saving data in parallel
        const resultAsyncs = await Promise.all([
            InformerRepository.create({
                cpf: informerData.cpf,
                name: informerData.nome,
            }),
            DescriptionRepository.create({
                title: descriptionFromRequest.titulo,
                description: descriptionFromRequest.descricao,
            }),
        ]);
        const [informer, description] = resultAsyncs;

        if (cached) {
            address = addressData;
        } else {
            address = await AddressRepository.create(fullAddress);
            Cache.set(cacheKey, address);
        }

        const complaint = await Complaint.create({
            latitude,
            longitude,
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
