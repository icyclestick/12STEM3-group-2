const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chickenSchema = new Schema({
    username: { type: String, required: true },
    tag: {
        type: String,
        required: true,
        unique: true,
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
    },
    date: { type: Date, required: true },
}, {
    timestamps: true,
})

const Chicken = mongoose.model('Chicken', chickenSchema)

module.exports = Chicken