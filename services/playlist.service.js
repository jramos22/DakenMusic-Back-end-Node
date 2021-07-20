const playlist = require('../models/playlist.model');

const playlistService = {}

playlistService.createPlaylist = async function({idUser, playlistName, idSongsAdded}){
    try{
        const Playlist = new playlist({idUser, playlistName, idSongsAdded});
        const newPlaylist = await Playlist.save();
        return newPlaylist;
    }catch(e){
        throw new Error('Error while save playlist');
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