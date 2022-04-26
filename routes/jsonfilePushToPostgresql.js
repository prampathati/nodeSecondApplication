var express = require('express');
var router = express.Router();
const csv = require('csvtojson');
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
  client.query("CREATE TABLE dmtemptable (dmtempid serial PRIMARY KEY,filename VARCHAR(50),filedata VARCHAR)",(err,results)=>{
      console.log('error from db ' + err);
      res.send(results);
      client.end();
  })
});   */
 
      router.get('/',(res,next)=>{
      csv().fromFile("D:/PavanPersonal/csvFiles/pavankumar.csv.csv")
      .then(leads => {
        let  data = JSON.stringify(leads);
           for (let temp of data){
            var query = "INSERT INTO dmtemptable (filename,filedata) VALUES ('" + "myrecords" + "','" + data.toLowerCase() + "')"
           // console.log(data.toLowerCase())
           }
           client.query(query,(err,results)=>{
            console.log('error from db ' + err);
           // console.log('responce from db ' + data);
            client.end();
        })  
        //var fileHeaders = data;
          /* for(let temp of data){
            console.log(temp.toLowerCase())
        }  */
    // console.log(fileHeaders);
      /*   var query = "INSERT INTO dmtemptable (filename,filedata) VALUES ('" + "myrecords" + "','" + data + "')" */
      // console.log(query);
          /* client.query(query,(err,results)=>{
            console.log('error from db ' + err);
           // console.log('responce from db ' + data);
            client.end();
        }) */
     })
});  

module.exports = router;


/* SELECT * FROM pavankumar_11thMAR2022;

DELETE FROM pavankumar_11thMAR2022;

SELECT * FROM dmtemp;

SELECT * FROM fndmtemp('')

select * from json_populate_record(null::json, '{"a":1,"b":2}')

select * from json_populate_recordset( null::(a int, b int)::type, '[{"a":1,"b":2},{"a":3,"b":4}]')

CREATE OR REPLACE FUNCTION public.fndmtemp(
	p_guid character varying)
    RETURNS void
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $dmtemp$
DECLARE d_myrecords jsonb ;
--DECLARE t1 record;
--DECLARE n INTEGER;
	BEGIN	
--create type t as ("LMSReference" text, "CallCenterDisposition" text, "CallCenterDispositionDate" text);
	
	EXECUTE 'SELECT  filedata ::jsonb  FROM dmtemp LIMIT 1;'
	INTO d_myrecords
	USING p_guid;
	raise notice '% - % d_myrecords 1', d_myrecords, p_guid;
	
	INSERT INTO pavankumar_11thmar2022 (ReceivedDate,LMSID,PaidSearchAdGroup,
										FirstName,LastName,HomePhone,
										EmailAddress,Zip,City,State,
										Lifecycle,FilterName,RequestedDivisionName,
										RequestedSchoolName,RequestedCampusName,
										RequestedCampusExternalReference,RequestedProgramName,
										RequestedProgramExternalReference,AdvertisingKey,
										GoodLead,BillableLead,CapturedLead,
										reason,AssignedBy,AdvertisingSource,
										ChannelType,ChannelExternalReference,
										LeadProvider,PricingGroup,FBLeadid,
										ReceivedMonth,PaidSearchCampaign,
										PaidSearchKeywords)
	SELECT * 
	FROM jsonb_populate_recordset(null::pavankumar_11thmar2022,d_myrecords) ;
	 
  	END;
$dmtemp$; */


