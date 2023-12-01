const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError")

const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({})
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'Error_get_Items')
    }
}
const getItem = (req, res) => {

}
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_CREANDO_ITEMS')
    }

}
const updateItem = (req, res) => {

}
const deleteItem = (req, res) => {

}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }