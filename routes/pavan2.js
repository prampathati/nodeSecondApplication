var express = require('express');
var router = express.Router();
const { Client } = require('pg');
const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
});
client.connect()
router.get('/',(req,res,next)=>{
    client.query('CREATE TABLE pavan2 (receiveddate VARCHAR,lmsid VARCHAR,paidsearchadgroup VARCHAR,firstname VARCHAR,lastname VARCHAR,homephone VARCHAR,emailaddress VARCHAR,zip VARCHAR,city VARCHAR,state VARCHAR,lifecycle VARCHAR,filtername VARCHAR,requesteddivisionname VARCHAR,requestedschoolname VARCHAR,requestedcampusname VARCHAR,requestedcampusexternalreference VARCHAR,requestedprogramname VARCHAR,requestedprogramexternalreference VARCHAR,advertisingkey VARCHAR,goodlead VARCHAR,billablelead VARCHAR,capturedlead VARCHAR,reason VARCHAR,assignedby VARCHAR,advertisingsource VARCHAR,channeltype VARCHAR,channelexternalreference VARCHAR,leadprovider VARCHAR,pricinggroup VARCHAR,fbleadid VARCHAR,receivedmonth VARCHAR,paidsearchcampaign VARCHAR,paidsearchkeywords VARCHAR)'),(err,results)=>{
        console.log('error from db ' + err);
        res.send(results);
        client.end();
    };
});
module.exports = router