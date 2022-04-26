var express = require('express');
var router = express.Router();
const csv = require("csv-parser");
const fs = require("fs");
const tableName = "umaprocess";
var allRows = [];
const { Client } = require('pg');
const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
});

client.connect();
router.get('/',(req,res,next)=>{
    client.query('CREATE TABLE uma (ReceivedDate DATE,ReceivedtIME TIME,LMSID int,PaidSearchAdGroup int,FirstName VARCHAR, LastName VARCHAR,HomePhone VARCHAR,EmailAddress VARCHAR,Zip VARCHAR,City VARCHAR,State VARCHAR,Lifecycle VARCHAR,FilterName VARCHAR,RequestedDivisionName VARCHAR,RequestedSchoolName VARCHAR,RequestedCampusName VARCHAR,RequestedCampusExternalReference VARCHAR,RequestedProgramName VARCHAR,RequestedProgramExternalReference VARCHAR(20),AdvertisingKey VARCHAR,GoodLead VARCHAR,BillableLead VARCHAR,CapturedLead VARCHAR,reason VARCHAR,AssignedBy VARCHAR,AdvertisingSource VARCHAR,ChannelType VARCHAR,ChannelExternalReference VARCHAR,LeadProvider VARCHAR,PricingGroup VARCHAR,FBLeadid VARCHAR,ReceivedMonth int,PaidSearchCampaign int,PaidSearchKeywords int)'),(err,results)=>{
        console.log('error from db ' + err);
        res.send(results);
        client.end();
    };
});   

module.exports = router;

/* 
SELECT * FROM uma;

COPY public."uma" FROM 'D:/Files/UMAProcess.csv.csv' DELIMITER ',' CSV HEADER; */