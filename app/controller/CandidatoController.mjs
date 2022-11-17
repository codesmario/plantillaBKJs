import QRCode from "qrcode";
import HttpCode from "../utils/httpCode.mjs";
import qr from "../utils/qrCode.mjs";

export default class CandidatoController {
  static async store(req, res) {
    const { l_name, f_name, age, birthday } = req.body;

    const qrCodeRes = await qr.generate(req.body);

    return res.status(HttpCode.HTTP_OK).json({ body: qrCodeRes });
  }
}
