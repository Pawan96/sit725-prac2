const express = require('express')

let app = express()
let accounts=[{id:1,name:'Alex',deposit:5},{id:2,name:'Sarah',deposit:5},{id:3,name:'Jim',deposit:15}]
let data= accounts.find(({name})=> name.toLowerCase()==='sarah')
app.get('/',function(request,response){
response.json(data)
})

//start the server on port 3000
app.listen(3000)