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
        console.log(idUser, idSong)
        const Recent = new recent({idUser: mongoose.Types.ObjectId(idUser), idSong})
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

recentService.upsertRecent = async function({id},{idSong}){
    try{
        
        const user = await findUser(id);
        if(user){
            return await updateRecent(user, idSong);
        }
        return await createRecent(id, idSong);
    }catch(e){
        throw new Error('Error while upsert Recent');
    }
}


recentService.getRecent = async function({id}){
    try{
        const recents = await recent.find({idUser:id});
        return recents;
    }catch(e){
        throw new Error ('Error while paginating recent');
    }
}

module.exports = recentService;