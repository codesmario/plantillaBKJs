import { Router } from "express";
import CandidatoController from "../../app/controller/CandidatoController.mjs";

const router = Router()

router.post('/', CandidatoController.store);

export default router;