const app = require('express')();
const PORT = 8080;


app.listen(
    PORT,
    ()=> console.log(`App running on localhost:${PORT}`)
)