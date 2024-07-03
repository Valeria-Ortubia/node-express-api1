const db =require("../db/db");

const getAllProducts = (req, res) => {

    const sql = "SELECT * FROM productos";

    db.query(sql, (error, rows) => {
        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        res.json(rows);
    });
};

const getOneProduct = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM productos WHERE id_productos = ?";

    db.query(sql, [id], (error, rows) => {
        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        if (rows.length == 0) {
            return res.status(404).json({error: "No existe ese producto"});
        };
        console.log(rows[0]);
        res.json(rows[0]);
    });
};

const insertProduct = (req, res) => {

    const { nombre, precio, bodegaID, categoriaID, stock } = req.body;

    const sql = "INSERT INTO productos (nombre, precio, bodegaID, categoriaID, stock, foto) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [nombre, precio, bodegaID, categoriaID, stock, req.file.filename], (error, result) => {
        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        const resp = `Producto ${result.insertId} creado con exito!!!`;
        const prodc = { ...req.body, id: result.insertId, foto: req.file.filename }
        res.json({respuesta: resp, datos: prodc });
    });
};

const updateProduct = (req, res) => {
    console.log(req.file)
    const { id } = req.params;
    const { nombre, precio, bodegaID, categoriaID, stock } = req.body;

    const sql = "UPDATE productos SET nombre = ?, precio = ?, bodegaID = ?, categoriaID = ?, stock = ?, foto = ? WHERE id_productos = ?";

    db.query(sql, [nombre, precio, bodegaID, categoriaID, stock, req.file.filename , id], (error, result) => {

        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        if (result.affectedRows == 0){
            return res.status(404).json({error: "No existe ese producto"});
        };
        const resp = `Producto ${id} actualizado con exito!!!`;
        const prodc = { ...req.body, ...req.params, foto: req.file.filename }
        res.json({respuesta: resp, datos: prodc });
    });
};

const deleteProduct = (req, res) => {
    
    const { id } = req.params;

    const sql = "DELETE FROM productos WHERE id_productos = ?";

    db.query(sql, [id], (error, result) => {

        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        if (result.affectedRows == 0){
            return res.status(404).json({error: "No existe ese producto"});
        };
        res.json({mensaje: `Producto ${id} borrado`});
    });
};


module.exports = {
    getAllProducts,
    getOneProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
};