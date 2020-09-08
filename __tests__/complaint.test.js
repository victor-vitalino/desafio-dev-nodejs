import request from 'supertest';
import app from '../src/app';

describe('Complaint', () => {
    it('returns error if data from request.body are not sent', async () => {
        const response = await request(app)
            .post('/v1/denuncias')
            .send({
                latitude: null,
                longitude: -36.76422,
                denunciante: {
                    nome: 'José de Oliveira',
                    cpf: '95761638037',
                },
                denuncia: {
                    titulo: 'Esgoto a céu aberto',
                    descricao:
                        'Existe um esgoto a céu aberto nesta localidade.',
                },
            });

        expect(response.status).toBe(400);
    });

    it('returns success after sending the correct data in the request body', async () => {
        const response = await request(app)
            .post('/v1/denuncias')
            .send({
                latitude: -9.6341418,
                longitude: -35.7141995,
                denunciante: {
                    nome: 'José de Oliveira',
                    cpf: '95761638037',
                },
                denuncia: {
                    titulo: 'Esgoto a céu aberto',
                    descricao:
                        'Existe um esgoto a céu aberto nesta localidade.',
                },
            });

        expect(response.status).toBe(201);
    });

    it('returns error if external api dont found the address', async () => {
        const response = await request(app)
            .post('/v1/denuncias')
            .send({
                latitude: -9,
                longitude: -3,
                denunciante: {
                    nome: 'José de Oliveira',
                    cpf: '95761638037',
                },
                denuncia: {
                    titulo: 'Esgoto a céu aberto',
                    descricao:
                        'Existe um esgoto a céu aberto nesta localidade.',
                },
            });

        expect(response.status).toBe(400);
    });

    it('returns json with the data saved in the database', async () => {
        const response = await request(app)
            .post('/v1/denuncias')
            .send({
                latitude: -9.6341418,
                longitude: -35.7141995,
                denunciante: {
                    nome: 'José de Oliveira',
                    cpf: '95761638037',
                },
                denuncia: {
                    titulo: 'Esgoto a céu aberto',
                    descricao:
                        'Existe um esgoto a céu aberto nesta localidade.',
                },
            });

        expect(response.body).toMatchObject({
            data: {
                id: 1,
                latitude: -9.6341418,
                longitude: -35.7141995,
                denunciante: {
                    nome: 'José de Oliveira',
                    cpf: '95761638037',
                },
                denuncia: {
                    titulo: 'Esgoto a céu aberto',
                    descricao:
                        'Existe um esgoto a céu aberto nesta localidade.',
                },
                endereco: {
                    logradouro: 'Rua José Antônio Reginaldo Pontes Lima',
                    bairro: '',
                    cidade: 'Maceió',
                    estado: 'Alagoas',
                    pais: 'BR',
                    cep: '57045-015',
                },
            },
        });
    });
});
