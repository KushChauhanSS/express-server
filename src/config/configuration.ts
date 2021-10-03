import { config } from 'dotenv';
config();
import * as joi from 'joi';
import { version } from '../../package.json';

const envVarsSchema = joi.object({
    NODE_ENV: joi.string().default('dev'),
    PORT: joi.number().default(9000),
    TOKEN_SECRET: joi.string().alphanum(),
    MONGO_URL: joi.string()
}).unknown().required();

const { value: envVars } = envVarsSchema.validate(process.env);

export const SWAGGER_URL = '/api-docs';

const ABOUT = {
    title: 'Express-Server API',
    description: 'A simple Express-Server CRUD API',
    contact: {
        name: 'API Support',
        email: 'support@successive.tech'
    }
};

// using name configuration instead of config here to prevent name conflict
const configuration: IConfig = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    secret: envVars.TOKEN_SECRET,
    mongoURL: envVars.MONGO_URL,
    swaggerDefinition: {
        openapi: '3.0.0',
        servers: [{
            url: 'http://localhost:9000/api/',
            description: 'Development Server'
        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
        info: {
            ...ABOUT,
            version
        }
    },
    swaggerUrl: SWAGGER_URL
});

export default configuration;
