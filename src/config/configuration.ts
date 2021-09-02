import { config } from 'dotenv';
config();
import * as joi from 'joi';

const envVarsSchema = joi.object({
    NODE_ENV: joi.string().default('dev'),
    PORT: joi.number().default(9000),
}).unknown().required();

const { value: envVars } = envVarsSchema.validate(process.env);

// using name configuration instead of config here to prevent name conflict
const configuration: IConfig = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
});

export default configuration;