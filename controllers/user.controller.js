const userService = require('../services/user.service');
const userController = {};

/* La declaración try...catch consta de un bloque try, que contiene una o más declaraciones, y un bloque catch, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque try.
En otra palabras, vamos a ejecutar lo que esta en el bloque try, si no tiene éxito, se va a pasar al bloque catch que este se va encargar de capturar el error. */

userController.create = async function (req, res, next){
    try{
        const newUser = await userService.createUser(req.body);

        /* Vamos a retornar una solicitud 201: Si la solicitud a tenido éxito y va retornar el JSON con el nuevo usuario que ha sido creado */
        return res.status(201).json({newUser});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}

userController.getUsers = async function (req, res, next){
    try{
        const users = await userService.getUsers();

        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito, va a retornar todos los usuarios que han sido creados*/
        return res.status(200).json({status: 200, data:users, message:"Succesfully users retrived"});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message});
    }
}

userController.getUser = async function(req, res, next){
    try{
        const user = await userService.getUser(req.params)

        if(user == null){
            /* Vamos a retornar status 400: En este caso, si el usuario no es encuentra o es nulo, el servidor no pudo interpretar la solicitud dada una sintaxis inválida. */
            return res.status(400).json({status:400, message:"cannot find User"});
        }
        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito, va a retornar el usuario específico */
        return res.status(200).json({status:200, data: user, message: "Succesfully user retrieved"});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status:400, message: error.message});
    }
}

userController.updateUser = async function (req, res, next){
    try{
        const updateUser = await userService.updateUser(req.params, req.body);
        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito, va a actualizar el usuario específico */
        return res.status(200).json({status:200, data: updateUser, message: "Succesfully update user"});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status:400, message: error.message});
    }
}

userController.deleteUser = async function (req, res, next){
    try{
        const deleteUser = await userService.deleteUser(req.params);

        /* Vamos a retornar una solicitud 201: Si la solicitud a tenido éxito y va a eliminar el usuario específico */
        return res.status(201).json({deleteUser});
    }catch(error){
        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}

userController.loggin = async function (req, res, next){
    try{
        const logginUser = await userService.loggin(req.params, req.body);

        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito, el usuario si pudo registrarse con éxito*/
        return res.status(200).json({logginUser});
    }catch(error){
        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}

module.exports = userController;