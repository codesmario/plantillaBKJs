import { Router } from "express";
import MunicipioController from "../../app/controller/MunicipioController.mjs";

const router = Router();

router.get('/', MunicipioController.index);

export default router;
