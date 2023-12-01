const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError")

const getItems = async (req, res) => {
    try {
        const user = req.user;
        const data = await tracksModel.find({})
        res.send({ data, user });
    } catch (e) {
        handleHttpError(res, 'Error_get_Items')
    }
}
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findById(id)
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "Error_get_Item")
    }

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
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findByIdAndUpdate(id, body);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Registro Nose puedo actualizar");
    }

}
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.deleteOne({ _id: id })
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "Error_Delete_Item")
    }
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }