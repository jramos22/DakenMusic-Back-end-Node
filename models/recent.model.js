const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recentSchema = mongoose.Schema({
    idUser:{
        type: Schema.Types.ObjectId,
        required: true
    },
    idSong:{
        type: String,
        required: true
    }, 
}, {versionKey: false});
const recent = mongoose.model('recent', recentSchema)
module.exports = recent;