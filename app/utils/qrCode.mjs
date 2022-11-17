import QRCode from "qrcode";

const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 1,
  margin: 3,
  color: {
    dark: "#6E7D75",
    light: "#becbcf"
  }
}

export default class qr {

  static async generate(string) {
    const dataToQr = JSON.stringify(string);
    const rest = QRCode.toDataURL(dataToQr, opts)
    return rest
  }

}
