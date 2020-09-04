function Routes(app) {
    app.post('/v1/denuncias', (req, res) => {
        return res.status(400).send();
    });

    app.get('/v1/denuncias', (req, res) => {
        return res.send('ola mundo');
    });
}

export default Routes;
