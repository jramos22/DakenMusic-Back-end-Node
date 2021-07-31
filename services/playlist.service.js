const playlist = require('../models/playlist.model');
const playlistService = {}

/*async function findUser(idUser){
    try{
        const user = playlist.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find favorite')
    }
}*/

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

/* playlistService.getPlaylist = async function(){
    try{
        const playlists = await playlist.find({});
        return playlists;
    }catch(e){
        throw new Error ('Error while paginating Playlists');
    }
} */

playlistService.getPlaylistOne = async function({id}){
    try{
        const Playlist = await playlist.find({_id:id});
        console.log(Playlist);
        return Playlist;
    }catch(e){
        throw new Error ('Error while paginating Playlists');
    }
}


module.exports = playlistService;