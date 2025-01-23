import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

import userRouter from './routes/user.routes';
app.use('/users', userRouter);

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});