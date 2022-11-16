import { Router } from 'express';
import routerDefault from './defaultRouter.mjs';
import routerDepartamento from './departamentoRouter.mjs'
import routerMunicipio from './municipioRouter.mjs'

const router = Router();

router.use('/default', routerDefault);
router.use('/departamentos', routerDepartamento);
router.use('/municipios', routerMunicipio);

export default router;