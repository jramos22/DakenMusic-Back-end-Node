const recentService = require('../services/recent.service');
const recentController = {};

/* La declaración try...catch consta de un bloque try, que contiene una o más declaraciones, y un bloque catch, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque try.
En otra palabras, vamos a ejecutar lo que esta en el bloque try, si no tiene éxito, se va a pasar al bloque catch que este se va encargar de capturar el error. */

recentController.upsert = async function (req, res, next){
    try{    
        const upsertRecent = await recentService.upsertRecent(req.params, req.body);
        
        /* Vamos a retornar una solicitud 201: Si la solicitud a tenido éxito y se ha actualizado la canción reciente */
        return res.status(201).json({status: 201, data:upsertRecent});

    }catch (error){
        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}

recentController.getRecent = async function (req, res, next){
    try{
        const recents = await recentService.getRecent(req.params);
        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito y se pudo obtener correctamente la canción reciente */
        return res.status(200).json({status: 200, data:recents, message:"Succesfully recent retrived"});
        
    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = recentController;