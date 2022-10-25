import app from './app.js'

async function main() {
	app.listen(3000, () => {
		console.log('Aplicacion conrriendo en el puerto 3000');
	})
}

main();
