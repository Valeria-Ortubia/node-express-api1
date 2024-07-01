const express = require("express");
const app = express();

const path = require ("path");

app.use(express.static(path.join(__dirname, "public")));

//const productosRouter = require('./routes/productos.routes');
app.use("/productos", productosRouter);

app.get("/", (req,res) => {
    res.send("Hola desde Express")
});
app.get("/factura", (req, res) => {
    res.sendFile(path.join(__dirname, "private", "factura.html"))
});

const PORT = 3000;

app.listen(PORT, () => console.log('htpp://localhost:${PORT}'));
