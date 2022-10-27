import { Router } from 'express';
import routerDefault from './defaultRouter.js';

const router = Router();

router.use('/default', routerDefault);

export default router;