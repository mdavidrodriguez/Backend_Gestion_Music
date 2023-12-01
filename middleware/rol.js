const { handleHttpError } = require("../utils/handleError")
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        console.log({ user });
        const rolesByUser = user.role;

        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)); //TODO: Devuelve true o false
        if (!checkValueRol) {
            handleHttpError(res, "USER_NOT_PERMISSION", 403);
            return
        }

        next()
    } catch (e) {

        handleHttpError(res, "ERROR_PERMISSION", 403)
    }

}


module.exports = checkRol