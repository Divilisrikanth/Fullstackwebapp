const { items } = require("../data");
const {invalidCredentials,invalidUsername} = require('../middleware/errorhandler')
const asyncWrapper = require('../middleware/async');



 const home = asyncWrapper(async (req, res,next) => {
   res.send('<h1>Home Page</h1><a href="/api/v1/items">products</a>')
     .status(200);
 });
 const getProducts = asyncWrapper(async (req, res,next) => {
   const newItems = items.map((item) => {
     const { id, name, img, price, desc, category } = item;
     return { id, name, img, price, desc, category };
   });
   res.json(newItems);
 });
 const loginPage = asyncWrapper(async (req, res,next) => {
   res.sendFile(__dirname + "/public/sigup.html");
 });

 const signupPage = asyncWrapper(async (req, res,next) => {
   console.log(req.body.emailid);
   if (req.body.emailid == "abc@gmail.com") {
     res.status(200).redirect("signup.html");
     console.log(req.body.emailid);
   }else {
      //  const msg = "please Enter valid Email id";
      next(invalidUsername)
   }
 });

  const validation = asyncWrapper(async (req, res,next) => {
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
const searchproductvalue = asyncWrapper(async (req, res,next) => {
    res.sendFile(__dirname + "/public/Details.html");
  });  
const searchProducts = asyncWrapper(async(req, res,next)=>{
  // const data = req.params['id']
   //const usersearchvalue ="Apple";
  const data = req.query.searchvalue;
   console.log(data)
   const productMatch={
    match:[data]
   }
 const productList = items.filter(filteredCategory =>
    productMatch.match.some(match=>filteredCategory.name.includes(match)))
     console.log(productList)
      if(productList.length > 0) {
             const search = productList.map((attributes)=>{
             const{name,img,desc,price,category}=attributes;
             return{name,img,desc,price,category}
          })
        res.json(search)

        console.log(search)
         //res.render('search');
      }         
        if (productList.length === 0){
          const msg = `No results for ${data}`
          res.json({msg})
        }
});
const productPage = asyncWrapper(async(req,res,next)=>{
 // const userSelectedValue = "Redmi"
   const userSelectedValue = req.params['id'];
   const productFound={
     match:[userSelectedValue]
   }
  const apiresponse =  items.filter(filteredCategory =>
    productFound.match.some(match=>filteredCategory.name.includes(userSelectedValue)))
    if(apiresponse.length > 0){
     const targetedProductfromapi = apiresponse.map((productattributes)=>{
     const{id,img,name,price,desc,category} =productattributes
     return{id,img,name,price,desc,category}
  })
    res.json(targetedProductfromapi)
    console.log(apiresponse)
   }
})
  
    // const searchResults = asyncWrapper(async(req,res)=>{
    //     const search = productList.map((attributes)=>{
    //     const{name,img,desc,category}=attributes;
    //     return{name,img,desc,category}
    //   })
    //    res.json(search)
    // });

module.exports = {
    home,
    getProducts,
    loginPage,
    signupPage,
    validation,
    invalidUsername,
    authenication,
    invalidCredentials,
    searchproductvalue,
    searchProducts,
    productPage
   
};

