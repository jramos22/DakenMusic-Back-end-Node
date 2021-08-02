const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Este modelo nos permite ver las estructura en el cual se van a pasar los valores,
para ser almacenados en la base de datos */
const favoriteSchema = mongoose.Schema({
    idUser:{
        type: Schema.Types.ObjectId,
        required: true
    },
    /*Esto es arregl que almacena los id de las canciones */
    songs: [String] 
}, {versionKey: false});
const favorite = mongoose.model('favorite', favoriteSchema)
module.exports = favorite;  