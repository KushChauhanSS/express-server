import * as express from 'express';
import notFoundRoute from './libs/routes/notFoundRoute';
import errorHandler from './libs/routes/errorHandler';
import router from './router';
import Database from './libs/Database';
import Swagger from './libs/Swagger';

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
            res.status(200).json({
                status: 200,
                message: 'I am OK'
            });
        });
        this.app.post('/data', (req, res) => {
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

    /**
     * Function to initialize bodyparser
     */
    initBodyParser = () => {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    /**
     * Function to initialize swagger
     */
    initSwagger = () => {
        const { swaggerDefinition, swaggerUrl } = this.config;
        const swaggerSetup = new Swagger();
        // JSON route
        this.app.use(`${swaggerUrl}.json`, swaggerSetup.getRouter({ swaggerDefinition }));
        const { serve, setup } = swaggerSetup.getUI(swaggerUrl);
        // Swagger UI route
        this.app.use(swaggerUrl, serve, setup);
    }

    /**
     * Function to bootstrap our app
     * @returns - Instance of current object
     */
    bootstrap = () => {
        this.initBodyParser();
        this.initSwagger();
        this.setupRoutes();
        return this;
    }

    /**
     * This will run the server at specified port after connecting wiht database.
     * @returns - Instance of current object
     */
    run = async () => {
        const { port, env, mongoURL } = this.config;
        try {
            await Database.open(mongoURL);
            this.app.listen(port, () => {
                console.log(`App started successfuly on port ${port} in ${env} environment.`);
            });
        }
        catch (error) {
            console.log('Error: ', error);
        }
        return this;
    }
}
