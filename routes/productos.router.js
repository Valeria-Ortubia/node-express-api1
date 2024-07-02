
const express = require ("express");
const router = express.Router();

const controller = require('../controllers/productos.controller');

router.get('/', controller.todosProductos);
router.get('/:id', controller.mostrarProducto);

module.exports = router;
