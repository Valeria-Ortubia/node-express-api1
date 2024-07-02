const db = require('../db/db');

const todosProductos = (req, res) => {
    const sql = "SELECT * FROM productos";

    db.query(sql, (error, rows) => {

        if (error) {
            res.status(500).json({ error: "error en la consulta" });
        }

        res.json(rows);
        console.log(rows);
    })

};

const mostrarProducto = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM productos WHERE ProductoID = ?";

    db.query(sql, [id], (error, rows) => {
        if (error) {
            return res.status(500).json({ error: 'Intente mas tarde' });
        }
        if (rows.length == 0) {
            return res.status(404).json({ error: "No existe el producto" });
        }
        res.json(rows[0]);
    })

};




module.exports = {
    todosProductos,
    mostrarProducto

}