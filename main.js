import app from "./src/app.js"

const puerto = 3000;

app.listen(puerto, () => {
    console.log(`APP - [${puerto}]`);
})