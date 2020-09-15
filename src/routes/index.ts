import { Router } from 'express';

import sessionRouter from './sessions.routes';
import userRouter from './users.routes';

const routes = Router();
routes.use('/session', sessionRouter);
routes.use('/user', userRouter);

export default routes;
