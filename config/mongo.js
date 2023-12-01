const mongoose = require("mongoose")
const colors = require("colors")
const dbConnect = async() => {
    try {
        const db = await mongoose.connect(process.env.DB_URI);
        const url = `${db.connection.host} : ${db.connection.port}`;
        console.log(colors.cyan("MongoDB se conecto correctamente"));
    } catch (error) {
        console.log(colors.red(`Error: ${error.message}`));
        process.exit(1);
    }
}


module.exports = dbConnect