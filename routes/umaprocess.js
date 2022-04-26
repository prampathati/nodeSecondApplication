var express = require('express');
var router = express.Router();
var csv = require('csvtojson');
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
    
    client.query('CREATE TABLE umaprocessing (ReceivedDate text,LMSID int,PaidSearchAdGroup int,FirstName VARCHAR(20),LastName VARCHAR(20),HomePhone int,EmailAddress text,Zip VARCHAR(20),City VARCHAR(20),State VARCHAR(20),Lifecycle VARCHAR(20),FilterName VARCHAR(20),RequestedDivisionName VARCHAR(20),RequestedSchoolName VARCHAR(20),RequestedCampusName VARCHAR(20),RequestedCampusExternalReference VARCHAR(20),RequestedProgramName VARCHAR(20),RequestedProgramExternalReference VARCHAR(20),AdvertisingKey VARCHAR(20),GoodLead VARCHAR(20),BillableLead VARCHAR(20),CapturedLead VARCHAR(20),reason VARCHAR(20),AssignedBy VARCHAR(20),AdvertisingSource VARCHAR(20),ChannelType VARCHAR(20),ChannelExternalReference VARCHAR(20),LeadProvider VARCHAR(20),PricingGroup VARCHAR(20),FBLeadid VARCHAR(20),ReceivedMonth int,PaidSearchCampaign int,PaidSearchKeywords int)'),(err,results)=>{
        console.log('error from db ' + err);
        res.send(results);
        client.end();
    };
});   */

/*' " + "LMSID" + " ',' " + "PaidSearchAdGroup" + " ',' " + "FirstName" + " ',' " + "LastName" + " ',' " + "HomePhone" + " ',' " + "EmailAddress" + " ',' " + "Zip" + " ',' " + "City" + " ',' " + "State" + " ',' " + "Lifecycle" + " ',' " + "FilterName" + " ',' " + "RequestedDivisionName" + " ',' " + "RequestedSchoolName" + " ',' " + "RequestedCampusName" + " ',' " + "RequestedCampusExternalReference" + " ',' " + "RequestedProgramName" + " ',' " + "RequestedProgramExternalReference" + " ',' " + "AdvertisingKey" + " ',' " + "GoodLead" + " ',' " + "BillableLead" + " ',' " + "CapturedLead" + " ',' " + "reason" + " ',' " + "AssignedBy" + " ',' " + "AdvertisingSource" + " ',' " + "ChannelType" + " ',' " + "ChannelExternalReference" + " ',' " + "LeadProvider" + " ',' " + "PricingGroup" + " ',' " + "FBLeadid" + " ',' " + "ReceivedMonth" + " ',' " + "PaidSearchCampaign" + " ',' " + "PaidSearchKeywords" + " ',

});  */


 /* router.get('/',(req,res,next)=>{
    csv().fromFile("D:/Files/UMAProcess2.csv.csv")
    .then(leads => {
     let data = JSON.stringify(leads);
    var query = "INSERT INTO umaprocessing (ReceivedDate,LMSID) VALUES ('" + "MYRECORDS" + "','" + data + "')"
    client.query(query,(err,results)=>{
        console.log('error from db ' + err);
        console.log('responce from db ' + results);
       // res.send(results);
       // console.log(data);
        client.end();
    });
  });
});   */

router.get('/',(req,res,next)=>{
  //  var users = req.body;
    csv().fromFile("D:/Files/UMAProcess2.csv.csv")
    .then(leads => {
      let data = JSON.stringify(leads);
  // console.log(data);
       var query = "INSERT INTO umaprocessing (ReceivedDate,LMSID) VALUES ('" + "MYRECORDS" + "','" + data + "')"
     console.log(query);
        client.query(query,(err,results)=>{
          console.log('error from db ' + err);
          res.send(results);
      })
  })
}); 

module.exports = router;