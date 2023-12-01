const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()

// Evitar error de origenes cruzados en el navegador
app.use(cors())

// Puerto de la app
const port = process.env.PORT || 4000

// Inicialización de la aplicación
app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:' + port);
})