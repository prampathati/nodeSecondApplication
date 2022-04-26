var express = require('express');
var router = express.Router();
//var csv = require('csvtojson');
const { Client } = require('pg');
const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
});

client.connect();

/* router.get('/',(req,res,next)=>{
    client.query('CREATE TABLE umaprocessing (ReceivedDate VARCHAR,LMSID VARCHAR,PaidSearchAdGroup VARCHAR,FirstName VARCHAR,LastName VARCHAR,HomePhone VARCHAR,EmailAddress VARCHAR,Zip VARCHAR,City VARCHAR,State VARCHAR,Lifecycle VARCHAR,FilterName VARCHAR,RequestedDivisionName VARCHAR,RequestedSchoolName VARCHAR,RequestedCampusName VARCHAR,RequestedCampusExternalReference VARCHAR,RequestedProgramName VARCHAR,RequestedProgramExternalReference VARCHAR,AdvertisingKey VARCHAR,GoodLead VARCHAR,BillableLead VARCHAR,CapturedLead VARCHAR,reason VARCHAR,AssignedBy VARCHAR,AdvertisingSource VARCHAR,ChannelType VARCHAR,ChannelExternalReference VARCHAR,LeadProvider VARCHAR,PricingGroup VARCHAR,FBLeadid VARCHAR,ReceivedMonth VARCHAR,PaidSearchCampaign VARCHAR,PaidSearchKeywords VARCHAR)'),(err,results)=>{
        console.log('error from db ' + err);
        res.send(results);
        client.end();
    };
});  */ 
/*  router.get('/',(req,res,next)=>{
  //  var users = req.body;
    csv().fromFile("D:/Files/UMAProcess2.csv.csv")
    .then(leads => {
      let data = JSON.stringify(leads);
  // console.log(data);
       var query = "INSERT INTO umaprocessing  VALUES (' " + ' " + " ' + data + ' " + " ' + ' " + " '+ " ' )"
     console.log(query);
        client.query(query,(err,results)=>{
          console.log('error from db ' + err);
          res.send(results);
      })
  })INSERT INTO umaprocess VALUES ('03-03-2022 07:49','2756116|44562.1811689815','6.25513E+12','Annie','Sams',
							'8595501610','zoellerannie@gmail.com','','','','Received','FacebookLF','UMA','UMA',
							'Online','Online','Not Sure','Not Sure','FacebookLF','Y','Y','N','Not Applicable',
							'External','PPC','Social','SOC','Becker Media PPC','All Inquiries Pricing Group',
							'4.02216E+14','1','6.25513E+12','6.25513E+12')
});   */

/* router.get('/',(req,res,next)=>{
    client.query(`INSERT INTO umaprocessing VALUES('03-03-2022 07:49','1654116|44562.2862268519','6.25513E+12','Pamelaooo','Griffin','Do Not Call','pamelawoman@yahoo.com','','','','Received','FacebookLF','UMA','UMA',
    'Online','Online','Not Sure','Not Sure','FacebookLF','Y','Y','N','Not Applicable',
    'External','PPC','Social','SOC','Becker Media PPC','All Inquiries Pricing Group',
    '1.02521E+15','1','6.25513E+12','6.25513E+12')`)
}) */

router.get('/',(req,res,next)=>{
    client.query(`INSERT INTO umaprocessing VALUES ('03-03-2022 07:49','2756116|44562.1811689815','6.25513E+12','Annie','Sams','8595501610','zoellerannie@gmail.com','','','','Received','FacebookLF','UMA','UMA',
    'Online','Online','Not Sure','Not Sure','FacebookLF','Y','Y','N','Not Applicable',
    'External','PPC','Social','SOC','Becker Media PPC','All Inquiries Pricing Group',
    '4.02216E+14','1','6.25513E+12','6.25513E+12')`)
})

module.exports = router;
