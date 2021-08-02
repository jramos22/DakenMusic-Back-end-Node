const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Este modelo nos permite ver las estructura en el cual se van a pasar los valores,
para ser almacenados en la base de datos: En este modelo tomaos el id del Usuario y el id de las canciones que son
almacenadas como un objeto */
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