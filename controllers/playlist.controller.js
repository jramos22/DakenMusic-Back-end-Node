const playlistService = require('../services/playlist.service');
const playlistController = {};

/* La declaración try...catch consta de un bloque try, que contiene una o más declaraciones, y un bloque catch, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque try.
En otra palabras, vamos a ejecutar lo que esta en el bloque try, si no tiene éxito, se va a pasar al bloque catch que este se va encargar de capturar el error. */

playlistController.create = async function (req, res, next){
    try{
        const newPlaylist = await playlistService.createPlaylist(req.body);

        /* Vamos a retornar una solicitud 201: Si la solicitud a tenido éxito y la playlist se ha creado con éxito*/
        return res.status(201).json({newPlaylist});
    }catch(error){
       
        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.updateplaylist = async function (req, res, next){
    try{
        const newPlaylist = await playlistService.updateplaylist(req.params, req.body);

        /* Vamos a retornar una solicitud 201: Si la solicitud a tenido éxito y la playlist se actualizado con éxito*/
        return res.status(201).json({newPlaylist});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.deletePlaylist = async function (req, res, next){
    try{
        const deletePlaylist = await playlistService.deletePlaylist(req.params);
        
        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito y la playlist se eliminó con éxito*/
        return res.status(200).json({deletePlaylist});

    }catch(error){
        
        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.deletePlaylistSong = async function (req, res, next){
    try{
        const deleteSongs = await playlistService.deleteSongs(req.params, req.body);

        /* Vamos a retornar una solicitud 201: Si la solicitud a tenido éxito y la canción de la playlist ha sido eliminada con éxito*/
        return res.status(201).json({deleteSongs});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.getPlaylist = async function (req, res, next){
    try{
        const playlists = await playlistService.getPlaylist(req.params);

        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito y se ha podido obtener todas las playlists con éxito */
        return res.status(200).json({status: 200, data:playlists, message:"Succesfully playlist retrived"});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message});
    }
}

playlistController.getOne = async function (req, res, next){
    try{
        const playlist = await playlistService.getPlaylistOne(req.params);

        /* Vamos a retornar una solicitud 200: Si la solicitud a tenido éxito y se pudo obtener una playslit en específica con éxito */
        return res.status(200).json({status: 200, data:playlist, message:"Succesfully playlist retrived"});

    }catch(error){

        /* Vamos a retornar status 400: El servidor no pudo interpretar la solicitud dada una sintaxis inválida */
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = playlistController;