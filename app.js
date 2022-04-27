const express = require("express");
const app = express();
const home = require("./Route/route")

app.set("views","./views");
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))


app.use('/',home)

app.listen(5000,()=>{
    console.log("listening on port 5000");
})