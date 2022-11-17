import HttpCode from "../utils/httpCode.mjs";

export default class DefaultController {
	static async index(req, res) {
		return res.status(HttpCode.HTTP_OK).json({ message: 'solicitud aceptada en default' });
	}
}