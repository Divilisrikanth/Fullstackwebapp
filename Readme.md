## To get started with this project ##
 Type npm install 
 
method="get" action="/getuservalue"



 //let usersearchvalue = document.querySelector('[name="searchvalue"]')
  //console.log(usersearchvalue)
document.getElementById("nav-search-submit-button").onclick=function getsearchvalue(){
//const params = window.location.search
//const id = new URLSearchParams(params).get('searchvalue')
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
                   <h2  class = "res_title">${itemValue. name}</h2>
                   <h2 class = "res_categ">Category:${itemValue.category}</h2>
                    <img src=${itemValue.img} alt ="img" class ="res_images">
                    <h2 class = "res_price">${itemValue.price}</h2>
                    <h2 class = "res_desc">${itemValue.desc}</h2>
                    </div>`
                    );
              
          })
        //}else    
        
          document.getElementById("cards").innerHTML=inputfromuser;
        }
   }).catch((err)=>{
     console.log(err)
   })
  }
 
 https://www.amazon.in/LG-Inverter-Frost-Free-Refrigerator-GL-I292RPZX/dp/B08X72GY5Q/ref=sr_1_10?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.wdhf-aWgBtjRCDbxdUWNpb0wasa3XQ9vlvVGPmerqQGjChge3ZGeSOJSuiq7Y6MiswOTuQnQL2heLh2_ccQ5Toz3sORFQh1NhRUNs1yQub20vGnKapqfMfPR8TYSHUIUufxaqSB1y3itoF1E7OHsMZKtgo8CqJq5odIsGSlFywyw26yZNDaXHSaBNmQ0tuGGPL1J8BF6fEftzRdwwzMwuJbNSGnoMPBGHkk0EHPJjhmPrEXSQXkBJaT7C5i4v6J1h6-YIUB4UCnBUK3CjEc80IaCg4ewGOMXxWROz_30zuc.DlcJR85JDk9eGXfkf4xHnmrz8iiWza-saIwk-P53liw&dib_tag=se&pd_rd_r=71ab6167-49b9-4f80-bce7-0605a82b34dc&pd_rd_w=ctzO1&pd_rd_wg=CaPnV&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=XNVG9Y8D0D1AV60XQKX8&qid=1713688264&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-10&th=1