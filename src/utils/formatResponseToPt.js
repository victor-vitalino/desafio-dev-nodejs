function formatResponseToPt({ complaint, informer, description, address }) {
    return {
        data: {
            id: complaint.id,
            latitude: complaint.latitude,
            longitude: complaint.longitude,
            denunciante: {
                nome: informer.name,
                cpf: informer.cpf,
            },
            denuncia: description,
            endereco: {
                logradouro: address.street,
                bairro: address.neighborhood,
                cidade: address.city,
                estado: address.state,
                pais: address.country,
                cep: address.postal_code,
            },
        },
    };
}
export default formatResponseToPt;
