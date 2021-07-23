const favorite = require('../models/favorite.model');
const mongoose = require('mongoose');

const favoriteService = {}

async function findUser(idUser){
    try{
        const user = favorite.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find favorite')
    }
}

async function createFavorite(idUser, songs){
    try{
        const Favorite = new favorite({idUser, songs})
        const newFavorite = await Favorite.save();
        return newFavorite;
    }catch(e){
        throw new Error('Error while save favorite');
    }
}

async function updateFavorite(user, songs){
    try{
        user.songs.push(songs.toString());
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while update favorite');
    }
}

async function deletesFavorite(user, song){
    try{
        user.songs.pull(song);
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while deletes favorite');    
    }
}

favoriteService.upsertFavorite = async function({idUser, songs}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await updateFavorite(user, songs);
        }

        return await createFavorite(idUser, songs);
    }catch(e){
        throw new Error('Error while upsert favorite');
    }
}

favoriteService.getFavorite = async function(){
    try{
        const favorites = await favorite.find({});
        return favorites;
    }catch(e){
        throw new Error ('Error while paginating Favorite');
    }
}

favoriteService.deleteFavorite = async function({idUser, songs}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await deletesFavorite(user, songs);
        }
    }catch(e){
        throw new Error('Error while delete favorite');
    }
}

module.exports = favoriteService;