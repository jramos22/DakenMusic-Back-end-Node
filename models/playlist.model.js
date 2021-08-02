const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Este modelo nos permite ver las estructura en el cual se van a pasar los valores,
para ser almacenados en la base de datos: En este modelo tenemos el id del Usuario, el nombre de la playlist 
y el arreglo con el id de las canciones agregadas a la playlist */
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