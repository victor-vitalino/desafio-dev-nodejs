import express from 'express';

import Routes from './routes';

class App {
    constructor() {
        this.server = express();
        this.server.use(express.json());
        this.routes();
    }

    routes() {
        // set instance of server to Routes function
        Routes(this.server);
    }
}

export default new App().server;
