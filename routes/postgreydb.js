var express = require('express');
var router = express.Router();
const { Client } = require('pg');
const client =new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
})

client.connect()

router.get('/',(req,res,next)=>{
    client.query(`CREATE TABLE users (id int,name VARCHAR(20))`,(err,results)=>{
        console.log('error from db ' + err);;
        res.send('responce from db ' + results);
        client.end();
    });
});

module.exports = router;