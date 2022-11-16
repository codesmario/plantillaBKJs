import { Router } from "express";
import DepartamentoController from "../../app/controller/DepartamentoController.mjs";

const router = Router();

router.get('/', DepartamentoController.index);

export default router;