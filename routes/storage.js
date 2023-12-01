
const express = require("express")
const uploadMiddleware = require("../utils/handleStorage");
const { createItem } = require("../controllers/storage");
const router = express.Router()
// Todo http://localhost:3000/storage


// Si se quiere enviar varios en una peticion se usa multi
router.post('/', uploadMiddleware.single("myfile"), createItem);



module.exports = router;