const recent = require('../models/recent.model');

const recentService = {}

recentService.createRecent = async function({idUser, idSong}){
    try{
        const Recent = new recent({idUser, idSong});
        const newRecent = await Recent.save();
        return newRecent;
    }catch(e){
        throw new Error('Error while save recent');
    }
}

recentService.getRecent = async function(){
    try{
        const recents = await recent.find({});
        return recents;
    }catch(e){
        throw new Error ('Error while paginating recent');
    }
}

module.exports = recentService;