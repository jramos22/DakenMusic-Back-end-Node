const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    idUser:{
        type: String,
        required: true
    },
    idFavoriteSongs:{
        type: [String],
        required: true
    }, 
}, {versionKey: false});
const favorite = mongoose.model('favorite', favoriteSchema)
module.exports = favorite;