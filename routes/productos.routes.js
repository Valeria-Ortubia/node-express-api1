const express = require ("express");
const router = express.Router();

const controller = require("../controllers/productos.controller")

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getOneProduct);

router.post("/", controller.insertProduct);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

module.exports = router;
