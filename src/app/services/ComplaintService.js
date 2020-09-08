import AddressService from './AddressService';

import formatResponseToPt from '../../utils/formatResponseToPt';

import InformerRepository from '../repository/InformerRepository';
import DescriptionRepository from '../repository/DescriptionRepository';
import AddressRepository from '../repository/AddressRepository';
import ComplaintRepository from '../repository/ComplaintRepository';

import Cache from '../../lib/Cache';

class ComplaintService {
    async run({
        latitude,
        longitude,
        denunciante: informerData,
        denuncia: descriptionFromRequest,
    }) {
        let address;
        const cacheKey = `${latitude}:${longitude}`;

        const { addressData, cached } = await AddressService.run({
            latitude,
            longitude,
        });

        let resultAsyncs;

        try {
            // saving data in parallel
            resultAsyncs = await Promise.all([
                InformerRepository.create({
                    cpf: informerData.cpf,
                    name: informerData.nome,
                }),
                DescriptionRepository.create({
                    title: descriptionFromRequest.titulo,
                    description: descriptionFromRequest.descricao,
                }),
            ]);
        } catch (error) {
            throw new Error('algo deu errado!');
        }
        const [informer, description] = resultAsyncs;

        if (cached) {
            address = addressData;
        } else {
            address = await AddressRepository.create(addressData);
            Cache.set(cacheKey, address);
        }

        const complaint = await ComplaintRepository.create({
            latitude,
            longitude,
            informer: informer.id,
            description: description.id,
            address: address.id,
        });

        return formatResponseToPt({
            complaint,
            informer,
            description: descriptionFromRequest,
            address,
        });
    }
}

export default new ComplaintService();
