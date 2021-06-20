
const express = require('express');
const path = require('path');
let router = express.Router();
let views;

const app =express();
app.use(express.json())
app.use(express.static('public'));
//__dirname returns the absolute path of the directory where js file is executing at the moment
let pathname = path.join(__dirname , 'public');
app.use(express.static(pathname));
app.use(express.urlencoded())

const port = process.env.PORT || 3000;

app.get('/' , (req ,res) =>{
    let way = pathname +"";
    console.log(way)

    res.sendFile(pathname+ '');
});

app.listen(port , ()=>{
    console.log(`Example app listening at http://localhost:${port}`)

})