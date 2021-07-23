const favoriteService = require('../services/favorite.service');
const favoriteController = {};

favoriteController.upsert = async function (req, res, next){
    try{    
        const upsertFavorite = await favoriteService.upsertFavorite(req.body);
        return res.status(201).json({status: 201, data:upsertFavorite});
    }catch (error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

favoriteController.getFavorite = async function (req, res, next){
    try{
        const favorites = await favoriteService.getFavorite();
        return res.status(200).json({status: 200, data:favorites, message:"Succesfully favorite retrived"});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}
favoriteController.delete = async function (req, res, next){
    try{
        const deleteFavorite = await favoriteService.deleteFavorite(req.body);
        return res.status(200).json({status: 200, data:deleteFavorite});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = favoriteController;