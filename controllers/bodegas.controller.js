const db =require("../db/db");

const getAllBodegas = (req, res) => {

    const sql = "SELECT * FROM bodegas";

    db.query(sql, (error, rows) => {
        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        res.json(rows);
    });
};

const getOneBodega = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM bodegas WHERE id_bodega = ?";

    db.query(sql, [id], (error, rows) => {
        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        if (rows.length == 0) {
            return res.status(404).json({error: "No existe esa Bodega"});
        };
        console.log(rows[0]);
        res.json(rows[0]);
    });
};

const insertBodega = (req, res) => {

    const { nombre } = req.body;

    const sql = "INSERT INTO bodegas (nombre) VALUES (?)";

    db.query(sql, [nombre], (error, result) => {
        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        const resultado = {...res.body, id: result.insertId}
        res.json(resultado);
    });
};

const updateBodega = (req, res) => {
    
    const { id } = req.params;
    const { nombre } = req.body;

    const sql = "UPDATE bodegas SET nombre = ? WHERE id_bodega = ?";

    db.query(sql, [nombre, id], (error, result) => {

        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        if (result.affectedRows == 0){
            return res.status(404).json({error: "No existe esa Bodega"});
        };
        const prodc = { ...req.body, ...req.params }
        res.json(prodc);
    });
};

const deleteBodega = (req, res) => {
    
    const { id } = req.params;

    const sql = "DELETE FROM bodegas WHERE id_bodega = ?";

    db.query(sql, [id], (error, result) => {

        if (error) {
            return res.status(500).json({error: "Error en la consulta"});
        };
        if (result.affectedRows == 0){
            return res.status(404).json({error: "No existe esa Bodega"});
        };
        res.json({mensaje: `Bodega ${id} borrada con exito`});
    });
};


module.exports = {
    getAllBodegas,
    getOneBodega,
    insertBodega,
    updateBodega,
    deleteBodega,
};