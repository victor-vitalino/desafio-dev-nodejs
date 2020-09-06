import getAddressFromApi from '../../services/getAddressFromApi';
import formatAddressFromApi from '../../services/formatAddressFromApi';
import validateAddressFormatted from '../../validator/ValidAddressFromApi';

import ComplaintModel from '../../models/Complaint/Complaint';
import ComplaintAddressModel from '../../models/Complaint/ComplaintAddress';
import ComplaintInformerModel from '../../models/Complaint/ComplaintInformer';
import ComplaintDescriptionModel from '../../models/Complaint/ComplaintDescription';

class CreateComplaint {
    async create(req, res) {
        const {
            latitude: lat,
            longitude: lng,
            denunciante: informerData,
            denuncia: descriptionFromRequest,
        } = req.body;
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
            return res.status(401).json({
                error: {
                    message: 'Endereço não encontrado para essa localidade.',
                    code: '02',
                },
            });
        }

        // search informer if found return data else create new and return
        const [
            informerFromDatabase,
        ] = await ComplaintInformerModel.findOrCreate({
            where: { cpf },
            defaults: { cpf, name },
        });

        // search address if found return data else create new and return
        const [addressFromDatabase] = await ComplaintAddressModel.findOrCreate({
            where: {
                street: fullAddress.street,
                neighborhood: fullAddress.neighborhood,
            },
            defaults: fullAddress,
        });
        //  create new description
        const descriptionFromDatabase = await ComplaintDescriptionModel.create({
            title: titleDescription,
            description: textDescription,
        });

        // create new complaint with associated tables foreign keys
        const complaintFromDatabase = await ComplaintModel.create({
            latitude: lat,
            longitude: lng,
            informer_id: informerFromDatabase.id,
            description_id: descriptionFromDatabase.id,
            address_id: addressFromDatabase.id,
        });

        const {
            street,
            neighborhood,
            city,
            state,
            country,
            postal_code,
        } = fullAddress;
        return res.status(201).json({
            data: {
                id: complaintFromDatabase.id,
                latitude: lat,
                longitude: lng,
                denunciante: {
                    nome: name,
                    cpf,
                },
                denuncia: descriptionFromRequest,
                endereco: {
                    logradouro: street,
                    bairro: neighborhood,
                    cidade: city,
                    estado: state,
                    pais: country,
                    cep: postal_code,
                },
            },
        });
    }
}

export default new CreateComplaint().create;
