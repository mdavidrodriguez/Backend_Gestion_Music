const express = require("express")
const { getItems, getItem, createItem } = require("../controllers/tracks")
const { validatorCreateItem } = require("../validators/tracks")
const customHeader = require("../middleware/customheader")
const router = express.Router()

// TODO http://localhost:tracks GET, POST, DELETE, PUT

router.get('/', customHeader, getItems);

router.post('/', validatorCreateItem, customHeader, createItem);


module.exports = router