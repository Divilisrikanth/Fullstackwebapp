const { invalidUsername } = require("./errorhandler");

const asyncWrapper = (fn) =>{
    return async(req,res,next) =>{
        try{
            await fn(req,res,next)
        } catch (error){
            next(invalidUsername)
        }
    }

}
module.exports = asyncWrapper;