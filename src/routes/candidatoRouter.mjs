import { Router } from "express";
import EstudianteController from "../../app/controller/EstudianteController.mjs";

const router = Router()

router.post('/', EstudianteController.store);

export default router;