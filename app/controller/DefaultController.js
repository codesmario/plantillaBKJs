export default class DefaultController {
    static async index(req, res) {
        const regex = /^[a]+$/;
        const almacen = {
            'estanteria1': {
                'cajon1': {
                    'producto1': 'coca-cola',
                    'producto2': 'fanta',
                    'producto3': 'sprite'
                }
            },
            'estanteria2': {
                'cajon1': 'vacio',
                'cajon2': {
                    'producto1': 'pantalones',
                    'producto2': 'camiseta' // <- ¡Está aquí!
                }
            }
        };
        // const result = [];
        // for (const i in almacen) {
        //     result.push([i, almacen[i]]);
        // }

        // const may = result.filter((item, indice) => console.log('==', item, indice))
        // const ls = JSON.stringify(almacen);
        let ls = 'marta'
        console.log('>>>>>>', ls.replace(regex,'----'));

        return res.status(200).json({ mssg: 'mensaje de carreras' });
    }
}