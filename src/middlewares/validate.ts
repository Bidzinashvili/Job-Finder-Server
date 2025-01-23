import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const cleanedMessage = error.details[0].message.replace(/["\\]/g, '');

            res.status(400).json({
                error: cleanedMessage,
            });
        } else {
            next();
        }
    };
};