require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()

// Evitar error de origenes cruzados en el navegador
app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

// Puerto de la app
const port = process.env.PORT || 4000


// Invocamos a las rutas
// TODO locahost/api/
app.use("/api", require("./routes"))

// Inicialización de la aplicación
app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:' + port);
})
// Llamando la conexión
dbConnect()