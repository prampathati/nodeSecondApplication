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
    client.query('CREATE TABLE pavankumar_11thMAR2022 (ReceivedDate VARCHAR,LMSID VARCHAR,PaidSearchAdGroup VARCHAR,FirstName VARCHAR,LastName VARCHAR,HomePhone VARCHAR,EmailAddress VARCHAR,Zip VARCHAR,City VARCHAR,State VARCHAR,Lifecycle VARCHAR,FilterName VARCHAR,RequestedDivisionName VARCHAR,RequestedSchoolName VARCHAR,RequestedCampusName VARCHAR,RequestedCampusExternalReference VARCHAR,RequestedProgramName VARCHAR,RequestedProgramExternalReference VARCHAR,AdvertisingKey VARCHAR,GoodLead VARCHAR,BillableLead VARCHAR,CapturedLead VARCHAR,reason VARCHAR,AssignedBy VARCHAR,AdvertisingSource VARCHAR,ChannelType VARCHAR,ChannelExternalReference VARCHAR,LeadProvider VARCHAR,PricingGroup VARCHAR,FBLeadid VARCHAR,ReceivedMonth VARCHAR,PaidSearchCampaign VARCHAR,PaidSearchKeywords VARCHAR)'),(err,results)=>{
        console.log('Errpr From Db ' + err);
        res.send(results)
    }
});
module.exports = router