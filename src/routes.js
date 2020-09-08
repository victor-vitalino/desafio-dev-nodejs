import validateRequestComplaintBody from './app/validator/validateRequestComplaintBody';
import CreateComplaint from './app/controllers/Complaint/CreateComplaint';

function Routes(router) {
    router.post('/v1/denuncias', validateRequestComplaintBody, CreateComplaint);

    router.get('/v1/denuncias', (req, res) => {
        return res.send('ola mundo');
    });
}

export default Routes;
