const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Este modelo nos permite ver las estructura en el cual se van a pasar los valores,
para ser almacenados en la base de datos: En este modelo vamos a poder almacenar el nombre, el correo 
y la contraseña del usuario */

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
},{versionKey:false});

const User = mongoose.model('User', userSchema)
module.exports = User;