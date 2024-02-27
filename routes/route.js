//const { items } = require("../data");
const { Router } = require("express");
const express = require("express");
const router = express.Router();
 const {
    home,
    getProducts,
    loginPage,
    signupPage,
    invalidUsername,
    validation,
    authenication,
    invalidCredentials,
}=require('../controllers/route')

 router.route("/").get(home)
 router.route("/api/v1/items").get(getProducts)
 router.route("/login.html").get(loginPage)
 router.route("/").post(signupPage) 
 router.route("/errormsg").get(invalidUsername)
 router.route("/signup.html").get(validation)
 router.route("/authenicate").post(authenication)
 router.route("/").get(invalidCredentials)


module.exports = router;

// route.get("/", (req, res) => {
//    res.send('<h1>Home Page</h1><a href="/api/v1/items">products</a>')
//      .status(200);
//  });
//  route.get("/api/v1/items", (req, res) => {
//    const newItems = items.map((item) => {
//      const { id, name, img, price, desc, category } = item;
//      return { id, name, img, price, desc, category };
//    });
//    res.json(newItems);
//  });
//  route.get("/login.html", (req, res) => {
//    res.sendFile(__dirname + "/public/sigup.html");
//  });

//  route.post("/", (req, res) => {
//    console.log(req.body.emailid);
//    if (req.body.emailid === "abc@gmail.com") {
//      res.status(200).redirect("signup.html");
//      console.log(req.body.emailid);
//    } else {
//      route.get("/errormsg", (req, res) => {
//        const msg = "please Enter valid Email id";
//        res.status(401).json({ msg });
//      });
//    }
//  });