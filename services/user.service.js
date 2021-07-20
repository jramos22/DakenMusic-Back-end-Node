const User = require('../models/user.model');

const userService = {}

userService.createUser = async function({name, email}){
    try{
        const user = new User({name, email});
        const newUser = await user.save();
        return newUser;
    }catch(e){
        throw new Error('Error while save user');
    }
}

userService.getUsers = async function(){
    try{
        const users = await User.find({});
        return users;
    }catch(e){
        throw new Error ('Error while paginating Users');
    }
}

module.exports = userService;