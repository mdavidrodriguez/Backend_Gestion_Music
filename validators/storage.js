const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")


const validatorgetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => validateResults(req, res, next)
]
module.exports = { validatorgetItem }