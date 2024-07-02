const express = require("express");
const app = express();

app.use(express.json());


const productosRouter = require('./routes/productos.router');
app.use('/productos', productosRouter);


app.get("/", (req, res) => {
    res.send("Hola desde express...");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
