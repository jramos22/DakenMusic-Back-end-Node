const favoriteService = require('../services/favorite.service');
const favoriteController = {};

favoriteController.create = async function (req, res, next){
    try{
        const newFavorite = await favoriteService.createFavorite(req.body);
        return res.status(201).json({newFavorite});
    }catch(error){
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

module.exports = favoriteController;