const md5 = require('md5');
const User = require('../models/user.model');

/* Las funciones asíncronas le permiten escribir código basado en Promise como si fuera sincrónico, Cuando la función asíncrona devuelve un valor, la promesa se cumple, si la función asíncrona arroja un error, se rechaza. */

/* md5 : Es un módulo en node.js, que utiliza un algoritmo de resumen de mensajes y es una función hash ampliamente utilizada que produce un valor hash de 128 bits, por lo que la contraseña se almacena en forma hash en la base de datos, lo que hace que el sistema sea más seguro. La contraseña real no debe almacenarse ya que es una mala práctica */

/* .find() : Es utilizado para encontrar datos particulares de la base de datos */
/* .save() : Es utilizado para guardar el documento en la base de datos */
/* .findById() : Es utilizado para buscar un solo documento por su campo _id */
/* .set() : Es utilizado para asignar el nombre de la configuración al valor*/
/* .deleteOne() : Es utilizado para eliminar el primer documento que cumple las condiciones de la colección */

const userService = {}

userService.createUser = async function({name, email, password}){
    try{
        const user = new User({name, email, password: md5(password)});
        const newUser = await user.save();
        return newUser;
    }catch(e){
        console.log(e.message);
        throw new Error('Error while save user');
    }
}

userService.getUsers = async function(){
    try{
        const users = await User.find({});
        return users;
    }catch(e){
        console.log(e.message);
        throw new Error ('Error while paginating Users');
    }
}

userService.getUser = async function({ id }){
    try{
        const user = await User.findById(id);
        let getUser = JSON.parse(JSON.stringify(user));
        delete getUser.password;
        return getUser;
    }catch (e){
        console.log(e.message);
        throw new Error('Error while returning user');
    }
}

userService.updateUser = async function({id},{name, email, password}){
    try{
        const user = await User.findById(id);
        const updateUser = await user.set({name, email, password: md5(password)});
        await updateUser.save();
        return updateUser;
    }catch(e){
        console.log(e.message);
        throw new Error ('Error while update user')
    }
}

userService.deleteUser = async function({id}){
    try{
        const user = await User.deleteOne({_id:id});
        if(user){
            return "User deleted successfully"
        }
    }catch(e){
        throw new Error('Error while delete User');
    }
}

userService.loggin = async function({email},{password}){
    try{
        const users = await User.find({email:email});
        if(users[0].password == md5(password)){
            return data = {
                id:users[0]._id,
                status: true
            }
        }else{
            return data ={
                status: false
            }
        };
    }catch(e){
        console.log(e.message);
        throw new Error ('Error while loggin User');
    }
}

module.exports = userService;