const { items } = require("../data");
const asyncWrapper = require('../middleware/async')


 const home = asyncWrapper(async (req, res) => {
   res.send('<h1>Home Page</h1><a href="/api/v1/items">products</a>')
     .status(200);
 });
 const getProducts = asyncWrapper(async (req, res) => {
   const newItems = items.map((item) => {
     const { id, name, img, price, desc, category } = item;
     return { id, name, img, price, desc, category };
   });
   res.json(newItems);
 });
 const loginPage = asyncWrapper(async (req, res) => {
   res.sendFile(__dirname + "/public/sigup.html");
 });

 const signupPage = asyncWrapper(async (req, res) => {
   console.log(req.body.emailid);
   if (req.body.emailid == "abc@gmail.com") {
     res.status(200).redirect("signup.html");
     console.log(req.body.emailid);
   }else {
      //  const msg = "please Enter valid Email id";
      invalidUsername
   }
 });

 const invalidUsername = asyncWrapper(async (req, res) => {
       const msg = "please Enter valid Email id";
       res.status(401).json({ msg })
       console.log(msg)
       //console.log(msg)
     });
  const validation = asyncWrapper(async (req, res) => {
   res.sendFile(__dirname + "/public/Orderdetails.html");
 });    
const authenication = asyncWrapper(async (req, res) => {
   console.log(req.body.passwordvalue);
   if (req.body.passwordvalue == "password@123") {
     res.status(200).redirect("Orderdetails.html");
     console.log(req.body.password);
   }else {
      //  const msg = "please Enter valid Email id";
      invalidCredentials
   }
 }); 
 const invalidCredentials = asyncWrapper(async (req, res) => {
       const msg = "please Enter correct password";
       res.status(401).json({ msg })
       console.log(msg)
       //console.log(msg)
     }); 
module.exports = {
    home,
    getProducts,
    loginPage,
    signupPage,
    validation,
    invalidUsername,
    authenication,
    invalidCredentials,
    
};

