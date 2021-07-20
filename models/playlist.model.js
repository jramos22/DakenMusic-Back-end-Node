const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    idUser:{
        type: String,
        required: true
    },
    playlistName:{
        type: String,
        required: true
    },
    idSongsAdded:{
        type: [String],
        required: true
    }, 
}, {versionKey: false});
const playlist = mongoose.model('playlist', playlistSchema)
module.exports = playlist;