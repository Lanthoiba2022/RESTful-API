const client = require('./connection')
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();