import request from 'supertest';
import app from '../src/app';

describe('Complaint', () => {
    it('returns error if latitude and longitude are not sent', async () => {
        const response = await request(app).post('/v1/denuncias').send({
            latitude: '',
            longitude: '93232',
        });

        expect(response.status).toBe(400);
    });
});
