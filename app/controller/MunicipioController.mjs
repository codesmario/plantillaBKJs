import { Municipios, Departamentos } from "../models/index.mjs";
import HttpCode from "../utils/httpCode.mjs";

export default class MunicipioController {
  static async index(req, res) {
    const ciudades = await Municipios.findAll({
      include: [
        {
          model: Departamentos,
          attributes: ['id', 'name', 'codigo'],
        }
      ]
    });
    return res.status(HttpCode.HTTP_OK).json(ciudades);
  }
}