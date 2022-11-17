import { Municipios, Departamentos } from "../models/index.mjs";

export default class MunicipioController {
    static async index(req, res) {
        const ciudades = await Municipios.findAll({
            include: [
                {
                    model: Departamentos
                }
            ]
        });
        return res.status(200).json(ciudades);
    }
}