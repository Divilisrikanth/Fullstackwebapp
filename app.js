const express = require('express')
const app = express()
const route = require('./routes/route')
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(route)

 app.get('/',(req,res)=>{
     res.send('<h1>Home Page</h1><a href="/api/v1/items">products</a>').status(200)
    
 })

app.listen(5000,()=>{
    console.log('server is listening at port 5000...')
    
    
})