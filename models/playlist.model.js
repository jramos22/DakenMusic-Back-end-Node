const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = mongoose.Schema({
    idUser:{
        type: Schema.Types.ObjectId,
        required: true
    },
    playlistName:{
        type: String,
        required: true
    },
    idSongsAdded:[String]
}, {versionKey: false});
const playlist = mongoose.model('playlist', playlistSchema)
module.exports = playlist;