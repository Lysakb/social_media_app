const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone_number: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirm_password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        enum: ["admin", "user"]
    }, 
},
{timestamps: true} 
)

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;