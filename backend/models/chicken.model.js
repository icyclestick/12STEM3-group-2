const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chickenSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    type: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    targetWeight: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
})

const Chicken = mongoose.model('Chicken', chickenSchema)

module.exports = Chicken