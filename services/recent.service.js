const recent = require('../models/recent.model');
const mongoose = require('mongoose');

const recentService = {}

async function findUser(idUser){
    try{
        const user = recent.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find recent')
    }
}

async function createRecent(idUser, idSong){
    try{
        const Recent = new recent({idUser, idSong})
        const newRecent = await Recent.save();
        return newRecent;
    }catch(e){
        throw new Error('Error while save Recent');
    }
}

async function updateRecent(user, idSong){
    try{
        user.idSong = idSong;
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while update Recent');
    }
}

recentService.upsertRecent = async function({idUser, idSong}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await updateRecent(user, idSong);
        }

        return await createRecent(idUser, idSong);
    }catch(e){
        throw new Error('Error while upsert Recent');
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