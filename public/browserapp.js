

let emailValue = document.querySelector('[name="emailid"]')

 document.getElementById("mySubmit").onclick=async function geterrormessage(){
   try{
      const res = await fetch('http://localhost:5000/errormsg')
       const statusCode = res.status;
      
           
         console.log("inside try block",statusCode)

         if(statusCode != 401 || statusCode == 404 || statusCode == 302 || statusCode == 304 || statusCode == 200 ){
            console.log(statusCode)
            document.getElementById("message").style.display="none";
            
         }else if(statusCode == 401){
            const data =  await res.json();
            console.log(data.msg)
            const datamesg = `<p id = "errmessage">${data.msg}</p>`
            
             document.getElementById("message").innerHTML = datamesg;
         }

                
     }        
     catch(err) {
        //if(err.response){
         console.log(err)
        // }
         ///if(err.response.status == 401){
           ///   const datamesg = `<p id = "errmessage">${dataValue.msg}</p>`
            
                // document.getElementById("message").innerHTML = datamesg;
          //  }

        }
    }



