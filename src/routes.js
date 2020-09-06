import validateRequestComplaintBody from './app/validator/validateRequestComplaintBody';
import CreateComplaint from './app/controllers/Complaint/CreateComplaint';

function Routes(app) {
    app.post('/v1/denuncias', validateRequestComplaintBody, CreateComplaint);

    app.get('/v1/denuncias', (req, res) => {
        return res.send('ola mundo');
    });
}

export default Routes;
