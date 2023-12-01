require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()

// Evitar error de origenes cruzados en el navegador
app.use(cors())

// Puerto de la app
const port = process.env.PORT || 4000

// Inicialización de la aplicación
app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:' + port);
})
// Llamando la conexión
dbConnect()