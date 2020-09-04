import express from 'express';

class App {
    constructor() {
        this.server = express();
        this.server.use(express.json());
        this.routes();
    }

    routes() {
        // this.server.use();
    }
}

export default new App().server;
