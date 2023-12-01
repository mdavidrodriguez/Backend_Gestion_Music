const mongoose = require("mongoose")

const UsersScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            select: false
        },
        role: {
            type: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true, //TODO createdAd, updateAD
        versionKey: false
    }
);
module.exports = mongoose.model("users", UsersScheme)