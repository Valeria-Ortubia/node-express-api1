require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")))

app.use(express.json());

const productosRoutes = require('./routes/productos.routes');

app.use("/productos", productosRoutes);

const bodegasRoutes = require('./routes/bodegas.routes');

app.use("/bodegas", bodegasRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`http://localhost:${port}`));