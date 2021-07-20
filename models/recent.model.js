const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recentSchema = new Schema({
    idUser:{
        type: String,
        required: true
    },
    idSong:{
        type: String,
        required: true
    }, 
}, {versionKey: false});
const recent = mongoose.model('recent', recentSchema)
module.exports = recent;