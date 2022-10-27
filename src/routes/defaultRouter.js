import { Router } from "express";
import DefaultController from "../../app/controller/DefaultController.js";

const router = Router();

router.get('/', DefaultController.index);

export default router;