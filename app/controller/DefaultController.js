export default class DefaultController {
    static async index(req, res) {
        return res.status(200).json({ message: 'solicitud aceptada en default' });
    }
}