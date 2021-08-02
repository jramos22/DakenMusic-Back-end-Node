const playlist = require('../models/playlist.model');
const mongoose = require('mongoose');

/* Las funciones asíncronas le permiten escribir código basado en Promise como si fuera sincrónico, Cuando la función asíncrona devuelve un valor, la promesa se cumple, si la función asíncrona arroja un error, se rechaza. */

/* .find() : Es utilizado para encontrar datos particulares de la base de datos */
/* .save() : Es utilizado para guardar el documento en la base de datos */
/* .findById() : Es utilizado para buscar un solo documento por su campo _id */
/* .deleteOne() : Es utilizado para eliminar el primer documento que cumple las condiciones de la colección */
/* .set() : Es utilizado para asignar el nombre de la configuración al valor*/
/* .push() : Es utilizado para agregar valores al final del array */
/* .pull() : Es utilizado para eliminar un elemento de la colección mediante la clave dada y devolver el elemento extraído */

const playlistService = {}


playlistService.createPlaylist = async function ({idUser, playlistName ,idSongsAdded}){
    try{
        const Playlist = new playlist({idUser, idSongsAdded, playlistName})
        const newPlaylist = await Playlist.save();
        return newPlaylist;
    }catch(e){
        throw new Error('Error while save playlist');
    }
}

playlistService.updateplaylist = async function({id},{idUser, playlistName, idSongsAdded}){
    try{
        const Playlist = await playlist.findById(id);
        const updatePlay = await Playlist.set({idUser, playlistName});
        Playlist.idSongsAdded.push(idSongsAdded.toString());
        await updatePlay.save();
        return updatePlay;
    }catch (e){
        throw new Error('Error while update playlist');
    }
}

playlistService.deleteSongs = async function({id},{idUser, playlistName, idSongsAdded}){
    try{
        const Playlist = await playlist.findById(id);
        const updatePlay = await Playlist.set({idUser, playlistName});
        Playlist.idSongsAdded.pull(idSongsAdded.toString());      
        await updatePlay.save();
        /*return updatePlay;*/        
        if(Playlist){
            return "Song deleted sucessfully"
        }
    }catch(e){
        throw new Error('Error while delete favorite');
    }
}
playlistService.deletePlaylist = async function({id}){
    try{
        const Playlist = await playlist.deleteOne({_id:id});
        if(Playlist){
            return "Playlist deleted successfully"
        }
        return Playlist;
    }catch(e){
        throw new Error('Error while delete Playlist');
    }
}

playlistService.getPlaylist = async function({idUser}){
    try{    
        const playlists = await playlist.find({idUser: mongoose.Types.ObjectId(idUser)});
        return playlists;
    }catch(e){
        throw new Error ('Error while paginating Playlists');
    }
} 

playlistService.getPlaylistOne = async function({idUser, id}){
    try{
        const Playlist = await playlist.find({idUser:mongoose.Types.ObjectId(idUser), _id:id}); 
        return Playlist;
    }catch(e){
        throw new Error ('Error while paginating Playlists');
    }
}


module.exports = playlistService;