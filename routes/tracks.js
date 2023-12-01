const express = require("express")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
const { validatorCreateItem, validatorgetItem } = require("../validators/tracks")
const customHeader = require("../middleware/customheader")
const router = express.Router()

// TODO http://localhost:tracks GET, POST, DELETE, PUT

router.get('/', getItems);

router.post('/', validatorCreateItem, createItem);

router.get('/:id', validatorgetItem, getItem);
router.put('/:id', validatorgetItem, validatorCreateItem, updateItem);
router.delete('/:id', validatorgetItem, deleteItem);


module.exports = router