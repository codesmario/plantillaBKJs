import { Router } from 'express';
import routerDefault from './defaultRouter.mjs';
import routerDepartamento from './departamentoRouter.mjs'
import routerMunicipio from './municipioRouter.mjs'
import routerCandidato from './candidatoRouter.mjs';

const router = Router();

router.use('/default', routerDefault);
router.use('/departamentos', routerDepartamento);
router.use('/municipios', routerMunicipio);
router.use('/candidatos', routerCandidato);

export default router;