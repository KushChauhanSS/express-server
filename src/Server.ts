import * as express from 'express';

export default class Server {

    private app: express.Express;

    /**
     * This is constructor
     * @param config
     */
    constructor(private config) {
        this.app = express();
    }

    /**
     * Function to setup routes
     * @returns
     */
    setupRoutes = () => {
        this.app.get('/health-check', (req, res) => {
            res.send('I am OK');
        });
        return this;
    }

    /**
     * Function to bootstrap our app
     * @returns
     */
    bootstrap = () => {
        this.setupRoutes();
        return this;
    }

    run = () => {
        const { port, env } = this.config;
        this.app.listen(port, () => {
            console.log(`App started successfuly on port ${port} in ${env} environment.`);
        });
        return this;
    }
}