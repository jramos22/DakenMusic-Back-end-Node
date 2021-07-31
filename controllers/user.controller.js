const userService = require('../services/user.service');
const userController = {};

userController.create = async function (req, res, next){
    try{
        const newUser = await userService.createUser(req.body);
        return res.status(201).json({newUser});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

userController.getUsers = async function (req, res, next){
    try{
        const users = await userService.getUsers();
        return res.status(200).json({status: 200, data:users, message:"Succesfully users retrived"});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

userController.getUser = async function(req, res, next){
    try{
        const user = await userService.getUser(req.params)
        if(user == null){
            return res.status(400).json({status:400, message:"cannot find User"})
        }
        return res.status(200).json({status:200, data: user, message: "Succesfully user retrieved"})
    }catch(error){
        return res.status(400).json({status:400, message: error.message});
    }
}

userController.updateUser = async function (req, res, next){
    try{
        const updateUser = await userService.updateUser(req.params, req.body);
        return res.status(200).json({status:200, data: updateUser, message: "Succesfully update user"})
    }catch(error){
        return res.status(400).json({status:400, message: error.message});
    }
}

userController.deleteUser = async function (req, res, next){
    try{
        const deleteUser = await userService.deleteUser(req.params);
        return res.status(201).json({deleteUser});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

userController.loggin = async function (req, res, next){
    try{
        const logginUser = await userService.loggin(req.params, req.body);
        return res.status(200).json({logginUser});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

module.exports = userController;