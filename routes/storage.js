
const express = require("express")
const uploadMiddleware = require("../utils/handleStorage");
const { createItem, getItem, updateItem, deleteItem, getItems } = require("../controllers/storage");
const { validatorgetItem } = require("../validators/storage")

const router = express.Router()
// Todo http://localhost:3000/storage

router.get("/", getItems);

router.get("/:id", validatorgetItem, getItem);

// Si se quiere enviar varios en una peticion se usa multi
router.post('/', uploadMiddleware.single("myfile"), createItem);

router.delete("/:id", validatorgetItem, deleteItem);




module.exports = router;