const express = require("express")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
const { validatorCreateItem, validatorgetItem } = require("../validators/tracks")
const customHeader = require("../middleware/customheader")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const router = express.Router()

// TODO http://localhost:tracks GET, POST, DELETE, PUT

router.get('/', authMiddleware, getItems);

router.post('/', validatorCreateItem, authMiddleware, checkRol(["admin"]), createItem);

router.get('/:id', validatorgetItem, authMiddleware, getItem);
router.put('/:id', validatorgetItem, authMiddleware, validatorCreateItem, updateItem);
router.delete('/:id', validatorgetItem, authMiddleware, deleteItem);


module.exports = router