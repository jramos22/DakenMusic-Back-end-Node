const playlist = require('../models/playlist.model');
const mongoose = require('mongoose');
const playlistService = {}

async function findUser(idUser){
    try{
        const user = playlist.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find favorite')
    }
}
async function findid(id){
    try{
        const user = playlist.findOne({_id:id});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find favorite')
    }
}

playlistService.createPlaylist = async function (idUser, playlistName ,idSongsAdded){
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
        console.log(Playlist);
        const updatePlay = await Playlist.set({idUser, playlistName});
        Playlist.idSongsAdded.push(idSongsAdded.toString());
        await updatePlay.save();
        return updatePlay;
    }catch (e){
        throw new Error('Error while update playlist');
    }
}

async function deletesSongs(user, song){
    try{
        user.idSongsAdded.pull(song);
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while deletes favorite');    
    }
}
async function deletesPlaylist(user, name){
    try{
        user.deleteOne({playlistName:name});
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while deletes favorite');    
    }
}


playlistService.deleteSongs = async function({songs},{idUser}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await deletesSongs(user, songs);
        }
    }catch(e){
        throw new Error('Error while delete favorite');
    }
}
playlistService.deletePlaylist = async function({idUser, name}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await deletesPlaylist(user, name);
        }
    }catch(e){
        throw new Error('Error while delete favorite');
    }
}

playlistService.getPlaylist = async function(){
    try{
        const playlists = await playlist.find({});
        return playlists;
    }catch(e){
        throw new Error ('Error while paginating Playlists');
    }
}

module.exports = playlistService;