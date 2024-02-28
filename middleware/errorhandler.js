const asyncWrapper = require('./async')
const invalidUsername = asyncWrapper(async (req, res) => {
       const msg = "please Enter valid Email id";
       res.status(401).json({ msg })
       console.log(msg)
       //console.log(msg)
     });
 const invalidCredentials = asyncWrapper(async (req, res) => {
       const msg = "please Enter correct password";
       res.status(401).json({ msg })
       console.log(msg)
       //console.log(msg)
     }); 
module.exports = {invalidCredentials,invalidUsername};       