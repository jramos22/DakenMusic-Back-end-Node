const playlistService = require('../services/playlist.service');
const playlistController = {};

playlistController.create = async function (req, res, next){
    try{
        const newPlaylist = await playlistService.createPlaylist(req.body);
        return res.status(201).json({newPlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.updateplaylist = async function (req, res, next){
    try{
        const newPlaylist = await playlistService.updateplaylist(req.params, req.body);
        return res.status(201).json({newPlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.deletePlaylist = async function (req, res, next){
    try{
        const deletePlaylist = await playlistService.deletePlaylist(req.params);
        return res.status(200).json({deletePlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.deletePlaylistSong = async function (req, res, next){
    try{
        const deleteSongs = await playlistService.deleteSongs(req.params, req.body);
        return res.status(201).json({deleteSongs});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.getPlaylist = async function (req, res, next){
    try{
        const playlists = await playlistService.getPlaylist(req.params);
        return res.status(200).json({status: 200, data:playlists, message:"Succesfully playlist retrived"});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

playlistController.getOne = async function (req, res, next){
    try{
        const playlist = await playlistService.getPlaylistOne(req.params);
        return res.status(200).json({status: 200, data:playlist, message:"Succesfully playlist retrived"});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = playlistController;