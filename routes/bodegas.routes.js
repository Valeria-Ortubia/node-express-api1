const express = require ("express");
const router = express.Router();

const controller = require("../controllers/bodegas.controller")

router.get("/", controller.getAllBodegas);
router.get("/:id", controller.getOneBodega);

router.post("/", controller.insertBodega);

router.put("/:id", controller.updateBodega);

router.delete("/:id", controller.deleteBodega);

module.exports = router;