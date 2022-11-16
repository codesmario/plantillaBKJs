import { Router } from 'express';
import routerDefault from './defaultRouter.mjs';
import routerDepartamento from './departamentoRouter.mjs'

const router = Router();

router.use('/default', routerDefault);
router.use('/departamentos', routerDepartamento);

export default router;