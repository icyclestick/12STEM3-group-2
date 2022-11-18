var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var herosSchema = new Schema({
    tag :{
        type: String,
        unique : false,
        // required : true
    },
    type : {
        type: String,
        unique : false,
        // required : true
    },
    weight : {
        type: Number,
        unique : false,
        // required : true
    },
    targetWeight : {
        type: Number,
        unique : false,
        // required : true
    }
}, {
    timestamps: true
});

module.exports = herosSchema;