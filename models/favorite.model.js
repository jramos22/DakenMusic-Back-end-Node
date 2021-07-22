const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    idUser:{
        type: Schema.Types.ObjectId,
        required: true
    },
    songs: [String] 
}, {versionKey: false});
const favorite = mongoose.model('favorite', favoriteSchema)
module.exports = favorite;  