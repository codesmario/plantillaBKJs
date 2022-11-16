import app from "./src/app.mjs"

const puerto = 3000;

app.listen(puerto, () => {
    console.log(`Corriendo aplicación - puerto: [${puerto}]`);
})