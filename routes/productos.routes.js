const express = require("express");
const router = express.Router();

const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img")
    },
    filename: (req, file, callback) => {
        const name = file.originalname.slice(0, file.originalname.indexOf("."));
        callback(null, name + "_" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

const controller = require("../controllers/productos.controller");

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getOneProduct);

router.post("/", upload.single('foto'), controller.insertProduct);

router.put("/:id", upload.single('foto'), controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

module.exports = router;
