const playlist = require('../models/playlist.model');
//const mongoose = require('mongoose');
const playlistService = {}

/*async function findUser(idUser){
    try{
        const user = playlist.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find favorite')
    }
}*/
/*async function findName(playlistName){
    try{
        const user = playlist.findOne({playlistName:playlistName});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find favorite')
    }
}*/

playlistService.createPlaylist =  async function({idUser, playlistName ,idSongsAdded}){
    try{
        console.log(idUser, playlistName, idSongsAdded)
        const Playlist = new playlist({idUser, playlistName, idSongsAdded});
        const newPlaylist = await Playlist.save();
        return newPlaylist;
    }catch(e){
        throw new Error('Error while save playlist');
    }
}

/*async function updateplaylist(user, songs){
    try{
        user.idSongsAdded.push(songs.toString());
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while update favorite');
    }
}*/

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