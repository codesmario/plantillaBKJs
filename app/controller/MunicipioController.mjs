import Departamentos from "../models/departamentos.mjs";
import Municipios from "../models/municipios.mjs";

export default class MunicipioController {
    static async index(req, res) {
        const ciudades = await Municipios.findAll({
            include: {
                model: Departamentos
            }
        });
        return res.status(200).json(ciudades);
    }
}