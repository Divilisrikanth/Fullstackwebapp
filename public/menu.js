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
                    <img src=${itemValue.img} ait ="img" class ="images">
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
                    <img src=${itemValue.img} ait ="img" class ="images">
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