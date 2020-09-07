const errors = {
    InvalidRequest: {
        error: {
            message: 'Request inválido.',
            code: '01',
        },
    },
    addressNotFound: {
        error: {
            message: 'Endereço não encontrado para essa localidade.',
            code: '02',
        },
    },
    invalidDataRequest: {
        error: {
            message: 'Dados Inconpletos',
            code: '03',
        },
    },
};

export default errors;
