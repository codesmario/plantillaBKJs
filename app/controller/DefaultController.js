export default class DefaultController {
    static async index(req, res) {
        return res.status(200).json({ mssg: 'mensaje de carreras' });
    }
}