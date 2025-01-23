import express from 'express';
const router = express.Router();

import { validate } from '../middlewares/validate';

import Joi from 'joi';
export const userSchema = Joi.object({
    name: Joi.string().min(1).required().messages({
        'string.empty': 'Name is required',
    }),
    lastName: Joi.string().min(1).required().messages({
        'string.empty': 'Last Name is required',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Invalid email format',
        'string.empty': 'Email is required',
    }),
    image: Joi.string().optional()
});

import { createUser } from '../controllers/user.controller';
router.post('/', validate(userSchema), createUser)

export default router;