const favorite = require('../models/favorite.model');

const favoriteService = {}

favoriteService.createFavorite = async function({idUser, idFavoriteSongs}){
    try{
        const Favorite = new favorite({idUser, idFavoriteSongs});
        const newFavorite = await Favorite.save();
        return newFavorite;
    }catch(e){
        throw new Error('Error while save favorite');
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

module.exports = favoriteService;