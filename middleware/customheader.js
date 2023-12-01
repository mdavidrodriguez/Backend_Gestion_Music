const customHeader = (req, res, next) => {
    try {
        const apikey = req.headers.api_key
        if (apikey === 'mateo-01') {
            next();

        } else {
            res.status(403);
            res.send({ error: "API KEY NO ES CORRECTA" })
        }

    } catch (e) {
        res.status(403)
        res.send({ error: "Algo ocurrio en el custom header" })
    }

}


module.exports = customHeader