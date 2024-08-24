const {Client} = require('pg');
const client = new Client({
    host : "localhost",
    user: "postgres",
    port : 5433,
    password : "#",
    database: "postgres"
})

client.connect();

client.query(`Select * from demo_data`, (err, res) => {
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
    client.end;
})