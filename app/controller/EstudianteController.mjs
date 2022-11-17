import QRCode from "qrcode";
import HttpCode from "../utils/httpCode.mjs";
import qr from "../utils/qrCode.mjs";
import { Estudiantes } from '../models/index.mjs';

export default class EstudianteController {
  static async store(req, res) {
    const {
      l_name,
      f_name,
      email,
      phone,
      birthday,
      id_career,
      id_school,
      id_state,
      id_town,
    } = req.body;

    const qrCodeRes = await qr.generate(req.body);

    await Estudiantes.create({
      l_name,
      f_name,
      email,
      phone,
      birthday,
    });

    return res.status(HttpCode.HTTP_OK).json({ body: qrCodeRes });
  }
}
