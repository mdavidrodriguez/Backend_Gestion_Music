const fs = require("fs")
const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`



const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({})
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "Error_get_items");
    }
}
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "Error_details_item");
    }
}
const createItem = async (req, res) => {
    const { body, file } = req
    console.log(body)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data })
}
const updateItem = async (req, res) => {

}
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id);
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`; //TODO: Ruta del disco donde se elimina
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        }
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "Error_delete_item");
    }
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }