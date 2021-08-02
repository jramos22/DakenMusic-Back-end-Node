const favoriteService = require('../services/favorite.service');
const favoriteController = {};

/* La declaración try...catch consta de un bloque try, que contiene una o más declaraciones, y un bloque catch, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque try.
En otra palabras, vamos a ejecutar lo que esta en el bloque try, si no tiene éxito, se va a pasar al bloque catch que este se va encargar de capturar el error. */

favoriteController.upsert = async function (req, res, next){    
    try{    
        const upsertFavorite = await favoriteService.upsertFavorite(req.body);

        /* Vamos a retornar una solicitud 201: La solicitud a tenido éxito
        y se ha creado un nuevo recurso como resultado, después de una petición de put */
        return res.status(201).json({status: 201, data: upsertFavorite});

    }catch (error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}

favoriteController.getFavorite = async function (req, res, next){
    try{
        const favorites = await favoriteService.getFavorite(req.params);

        /* Vamos a retornar status 200: Las solicitud ha tenido éxito y se ha obtenido la canción favorita */
        return res.status(200).json({status: 200, data:favorites, message:"Succesfully favorite retrived"});

    }catch(error){
        
        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message});
    }
}
favoriteController.delete = async function (req, res, next){
    try{
        const deleteFavorite = await favoriteService.deleteFavorite(req.body);

        /* Vamos a retornar status 200: Las solicitud ha tenido éxito y se ha elimindado la canción favorita */
        return res.status(200).json({status: 200, data:deleteFavorite});
    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = favoriteController;