const favorite = require('../models/favorite.model');
const mongoose = require('mongoose');

/* Las funciones asíncronas le permiten escribir código basado en Promise como si fuera sincrónico, Cuando la función asíncrona devuelve un valor, la promesa se cumple, si la función asíncrona arroja un error, se rechaza. */

/* .find() : Es utilizado para encontrar datos particulares de la base de datos */
/* .save() : Es utilizado para guardar el documento en la base de datos */
/* .pull() : Es utilizado para eliminar un elemento de la colección mediante la clave dada y devolver el elemento extraído */

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

async function deletesFavorite(user, songs){
    try{
        user.songs.pull(songs.toString());
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

favoriteService.getFavorite = async function({id}){
    try{
        const favorites = await favorite.find({idUser: mongoose.Types.ObjectId(id)});
        return favorites;
    }catch(e){
        throw new Error ('Error while paginating Favorite');
    }
}

favoriteService.deleteFavorite = async function({songs, idUser}){
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