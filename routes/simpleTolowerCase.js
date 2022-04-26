var express = require('express');
var router = express.Router();
const csv = require('csvtojson');
const uuidv1 = require('uuid');
var moment = require('moment');
//const querystring = require("querystring");
const { Client } = require('pg');
const client = new Client({
  user : 'postgres',
  host : 'localhost',
  database : 'postgres',
  password : 'Pav@12345',
  port : 5432
});
client.connect()
  /* router.get('/',(req,res,next)=>{
  client.query("CREATE TABLE dmtemp (simpledmtemp serial PRIMARY KEY,filename VARCHAR,filedata VARCHAR)",(err,results)=>{
      console.log('error from db ' + err);
      res.send(results);
      client.end();
  })
});  */
router.get('/',(req,res,next)=>{
      //this is used for file path
      csv().fromFile("D:/PavanPersonal/csvFiles/csvFiles75000.csv")
      .then(leads => {
      var count = 0;
      var tempJsonDataArray = new Array();
      var tempJsonData = {};
      for(let i = 0; i< leads.length; i++){
          count = count + 1;
          tempJsonDataArray.push(leads[i]);
          if(count == 3){
           tempJsonData = tempJsonDataArray;
           var data = JSON.stringify(tempJsonData);
           var JsosnData = data.replace(/\s/g,'').toLowerCase();
               console.log(JsosnData)
          var count = 0;
          var tempJsonDataArray = new Array();
          }
      }
      if(count != 0){
          tempJsonData = tempJsonDataArray;
          let data = JSON.stringify(tempJsonData);
          var jsonData = data.replace(/\s/g,'').toLowerCase();
          console.log("count != 0")
          console.log(jsonData)
      }   
        //dynamically insert data into a table before exicuting the query string
        var part1q = 'INSERT INTO umaprocess (';
        var part2q = 'SELECT '
        //getting the file headers
        var fileHeaders= Object.keys(leads[0]);
      for (let i = 0; i < fileHeaders.length; i++){
        //this is used for remove the white spaces and change to small letters
        var headers = fileHeaders[i].replace(/\s/g,'').toLowerCase()
        //Creating the file headers
        const regex = new RegExp(fileHeaders[i],'ig');
           //console.log(regex)
           //console.log(i,data)
        data = data.replace(regex,fileHeaders[i].replace(/\s/g,'').toLowerCase());
        //this is used for dynamically insert data into a table before exicuting the query string
      if(i != fileHeaders.length-1){
          part1q = part1q + headers + ','
          part2q = part2q + headers + ','
          }else{
          part1q = part1q + headers  
          part2q = part2q + headers 
      }
        
      }  
        //this is used for remove the white spaces and change to small letters
        data = data.split("'").join("''")
        // dynamically insert data into a table before exicuting the query string
        var querydmtemp = part1q + ') ' + part2q + ' FROM jsonb_populate_recordset(null::umaprocess,$1) ; ';
        console.log(querydmtemp)
        //guid use for parameter guid
        var guid = uuidv1.v4();
        //starttime is used for how much time for exicuting 100000 (or) any csv files
        var StartTime = moment();

        var query = "INSERT INTO dmtemp (filename,filedata,guid,client) VALUES ('" + "myrecords" + "','" + data + "' , '" + guid + "', 1); SELECT * FROM fndmtemp('" + querydmtemp + "','" + guid +"',1);"
      client.query(query,(err,results)=>{
        console.log('error from db ' + err);
        //starttime is used for how much time for exicuting 100000 csv files
        var totaltime = moment().diff(StartTime, 'milliseconds')
        console.log('time' , totaltime)
      }) 
    })  
});   

module.exports = router;