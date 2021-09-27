import * as swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import { Router } from 'express';

interface ISwaggerDefinition {
    swaggerDefinition: {
        openapi: string;
        servers: [{
            url: string;
            description: string;
        }];
        info: {
            title: string;
            description: string;
            version: string;
            contact: {
                name: string;
                email: string;
            };
        }
    };
}

export default class Swagger {
    public getRouter({ swaggerDefinition }: ISwaggerDefinition) {
        const router: Router = Router();

        router.route('/').get((req, res) => {

            // options for the swagger docs
            const options = {
                // path to the API docs
                apis: ['dist/**/*.js'],
                // import swaggerDefinitions
                swaggerDefinition
            };

            // initialize swagger docs
            const swaggerSpec = swaggerJSDoc(options);
            console.log('swaggerSpec', swaggerSpec);
            res.send(swaggerSpec);
        });
        return router;
    }

    public getUI(swaggerUrl: string) {
        const options = {
            swaggerUrl: `${swaggerUrl}.json`
        };
        return {
            serve: swaggerUi.serve,
            setup: swaggerUi.setup(undefined, options)
        };
    }
}
