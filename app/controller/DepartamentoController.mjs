import Departamentos from "../models/departamentos.mjs";

export default class DepartamentoController {
    static async index(req, res) {
        const deptos = await Departamentos.findAll();
        return res.status(200).json(deptos);
    }
}