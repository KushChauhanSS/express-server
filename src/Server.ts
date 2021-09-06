import * as express from 'express';
import * as bodyParser from 'body-parser';
import notFoundRoute from './libs/routes/notFoundRoute';
import errorHandler from './libs/routes/errorHandler';
import router from './router';
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
            console.log('/health-check api called');
            // res.send('I am OK');
            res.status(200).json({
                status: 200,
                message: 'I am OK'
            });
        });
        this.app.post('/data', (req, res) => {
            console.log('/data api called');
            console.log('post request data', req.body);
            res.status(200).json({
                status: 200,
                message: 'I am OK'
            });
        });
        this.app.use('/api', router);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
        return this;
    }

    initBodyParser = () => {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    /**
     * Function to bootstrap our app
     * @returns
     */
    bootstrap = () => {
        this.initBodyParser();
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