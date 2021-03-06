import { Request, Response, NextFunction } from 'express';
/* tslint:disable-next-line */
const { checkSchema, validationResult } = require('express-validator/check');

const validationHandler = (validationSchema) => {
    return [
        checkSchema(validationSchema), (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                next({ message: 'Bad Request!', status: 422, error: errors.array() });
            }
            next();
        }
    ];
};

export default validationHandler;
