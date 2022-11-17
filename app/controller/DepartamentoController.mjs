import Departamentos from "../models/departamentos.mjs";
import HttpCode from "../utils/httpCode.mjs";

export default class DepartamentoController {
  static async index(req, res) {
    const deptos = await Departamentos.findAll();
    return res.status(HttpCode.HTTP_OK).json(deptos);
  }
}