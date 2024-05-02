
document.getElementById("firstcategoryValue").onclick=function getdata(){
fetch('http://localhost:5000/api/v1/items')
  .then((data) => {
    //console.log(data)
    return data.json()
  }).then((values)=>{
    //applying filter method for the object
    let output = 
    values.filter(values => values.category == "fruits");
       for (let i = 0; i < output.length; i++) {
    //console.log(output[i].name)

   console.log(typeof(output))
    // let datas = " "
     const datas =output.map((itemValue)=>{
             return(
                  `<div class ="card"> 
                   <h2  class = "title">${itemValue. name}</h2>
                    <img src=${itemValue.img} alt ="img" class ="images">
                    <h2 class = "price">${itemValue.price}</h2>
                    <h2 class = "desc">${itemValue.desc}</h2>
                   <h2 class = "categ">${itemValue.category}</h2>
                    <h2><button onClick=>Add to cart </button></h2>
                    </div>`
                  );
          })
          document.getElementById("cards").innerHTML=datas;
       
   };  
  }).catch((err) => {
    console.log(err)
  })
}

document.getElementById("secondcategoryValue").onclick=function getdatavalues(){
fetch('http://localhost:5000/api/v1/items')
  .then((data) => {
    //console.log(data)
    return data.json()
  }).then((values)=>{
   
    let output = 
    values.filter(values => values.category == "Electronics");
       for (let i = 0; i < output.length; i++) {
    //console.log(output[i].name)

   console.log(typeof(output))
 
     //let datas =" " 
     const datas = output.map((itemValue)=>{
               return(
                  `<div class ="card">
                   <h2  class = "title">${itemValue. name}</h2>
                    <img src=${itemValue.img} alt ="img" class ="images">
                    <h2 class = "price">${itemValue.price}</h2>
                    <h2 class = "desc">${itemValue.desc}</h2>
                    <h2 class = "categ">${itemValue.category}</h2>
                    <h2><button onClick=>Add to cart </button></h2>
                    </div>`
                    );
              
          })
          document.getElementById("cards").innerHTML=datas;
       
   };  
  }).catch((err) => {
    console.log(err)
  })
}
document.getElementById("nav-search-submit-button").onclick=function getsearchvalue(){
    
     let usersearchvalue = document.getElementsByName("searchvalue")[0].value  
      console.log(usersearchvalue)
        fetch(`http://localhost:5000/getuservalue?searchvalue=${usersearchvalue}`)
        .then((data)=>{
        // console.log(data)
        return data.json()
      
      }).then((values)=>{
        console.log(values)
        console.log(values.length)
        console.log(values.msg)
          if(values.length === undefined){
             const inputfromuser = `<div class ="np_dispm"><h2  class = "title">${values.msg}</h2></div>`
                    
               document.getElementById("cards").innerHTML=inputfromuser; 
             }else if(values.length != 0){
           console.log(values.length)
         const inputfromuser = values.map((itemValue)=>{
                  return(
                     `<div class ="prod_resp">
                      <h2  class = "res_title"><a href="productpage.html">${itemValue. name} </a></h2>
                      <h2 class = "res_categ">Category:${itemValue.category}</h2>
                       <img src=${itemValue.img} alt ="img" class ="res_images">
                       <h2 class = "res_price">${itemValue.price}</h2>
                       <h2 class = "res_desc">${itemValue.desc}</h2>
                       </div>`
                       );
              
             })
          
        
            document.getElementById("cards").innerHTML=inputfromuser;
           }
      }).catch((err)=>{
        console.log(err)
      })
    }
 
  



//document.getElementById("nav-search-submit-button").onclick=function getsearchvalue(){       
  //  let usersearchvalue = document.getElementsByName("searchvalue")[0].value  
  //  console.log(usersearchvalue)
  //  let url = "http://localhost:5000/Details.html"
 //   let len =url.length;
  //  let newurl =url.substring(0,21)
  //  let changedurl ="/Details.html/getuservalue/"+usersearchvalue
  //  let mainurl = newurl.concat(changedurl)
       //const params = new URLSearchParams(window.location.search)
      //const changingvalue = params.set(" ",usersearchvalue)
      //window.location.search= changingvalue.toString()
  //     window.location.href = mainurl
 //      console.log(changingvalue);
//     // const id = new URLSearchParams(params)
//     //  let Reg = new RegExp("/Details.html")
//     //  let separator = url.indexOf('/')
//     //   if (url == 'http://localhost:5000/Details.html'){
//     //  url += `http://localhost:5000/getuservalue/Apple${usersearchvalue}`
//     //  } else {
//     //   url += `getuservalue/${usersearchvalue}`
//     //    }
//     // console.log( url)
  
           
// //         mainurl = values.map((itemValue)=>{
// //                  return(
// //                     `<div class ="prod_resp">
// //                      <h2  class = "res_title">${itemValue. name}</h2>
// //                      <h2 class = "res_categ">Category:${itemValue.category}</h2>
// //                       <img src=${itemValue.img} alt ="img" class ="res_images">
// //                       <h2 class = "res_price">${itemValue.price}</h2>
// //                       <h2 class = "res_desc">${itemValue.desc}</h2>
// //                       </div>`
// //                       );
// //    document.getElementById("cards").innerHTML=mainurl;
   
// // })
// }


 //console.log("window"+""+ id)
//HttpStatusCode.
  //let usersearchvalue = document.querySelector('[name="searchvalue"]')
//   //console.log(usersearchvalue)
  //document.getElementById("nav-search-submit-button").onclick=function getsearchvalue(){
   //window.location.append(usersearchvalue)s
 // //const id = new URLSearchParams(params).get('searchvalue')
//}