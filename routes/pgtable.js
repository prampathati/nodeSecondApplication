var express = require('express');
var router = express.Router();
const Client = require("pg").Client;
const csv = require("csv-parser");
const fs = require("fs");
const tableName = "umaprocess";
var allRows = [];
const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
  });

client.connect();

router.get('/',(req,res,next)=>{

    function fixStringValue( dataRow, delimiter="," ) {

        // split row using target delimiter
        var splitRow = dataRow.split( delimiter )
        
        // iterate the elements in the CSV row
        
        
        // check for string escape char
        if (row.includes("'") === false) {
       // console.log("\nFix non-strings in row:")
        
        // try to fix the string values if needed
        row = fixStringValue( row )
        }
        
        // append the closing parenthesis for the SQL string
         sqlStatement += 'D:/Files/UMAProcess2.csv(' + String(row) + '),'
        }
    
    
        // remove the last comma, and replace it with a semi-colon
       var  sqlStatement = sqlStatement;
        
        // log the SQL statement to console
       // console.log("D:/Files/UMAProcess2.csv.csvsqlStatement:", sqlStatement, "D:/Files/UMAProcess2.csv.csv")
      
                // pass the SQL string to the the client.query() method call
            client.query("INSERT INTO umaprocess VALUES ('" + "" + "','" + sqlStatement + "')", (err, res)=>{
                fs.createReadStream("UMAProcess2.csv")
                .on('error', (err) => {
                   // console.log("D:\\nodeHeroku\\herokuApplication\\UMAProcess2.csv.csvfs.createReadStream() error:", err)
                    //console.log("Make sure the path and name for the CSV file are correct.")
                })
                    
                    // create a pipe for the CSV file
                .pipe(csv([]))
                // get the data
                .on('data', (dataRow) => {

                // log the data row to the console
                console.log("dataRow:", dataRow);
                console.log("dataRow type:", typeof dataRow);
                
                // push the data row to the CSV data array
                allRows.push( dataRow )
                
                })
                // createReadStream ended
                .on('end', () => {
                console.log('CSV data iteration finished');
                
                // call the insertRecords() function declared earlier
                insertRecords( allRows )
                })

                if (err !== undefined) {
                // log the error to console
                console.log("Postgres INSERT error:", err)
                }
                
                // check if the response is not 'undefined'
                if (res !== undefined) {
                
                // log the response to console
                console.log("Postgres response:", res)
                
                if (res.rowCount > 0) {
                console.log("# of records inserted:", res.rowCount)
                } else {
                console.log("No records were inserted.")
                }
                }
                }) 
                // end of client.query()
               // client.end()

});

module.exports = router;
     

/* var express = require('express');
var router = express.Router();
const Client = require("pg").Client;
const csv = require("csv-parser");
const fs = require("fs");
const tableName = "umaprocess";
var allRows = [];
const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
  });

  client.connect();

  router.get('/',(req,res,next)=>{
      
                // create a function to fix string values in Postgres table row
                function fixStringValue( dataRow, delimiter="," ) {

                // split row using target delimiter
                var splitRow = dataRow.split( delimiter )



                // check for string escape char
                if (row.includes("'") === false) {
               // console.log("\nFix non-strings in row:")

                // try to fix the string values if needed
                row = fixStringValue( row )
                }

                // append the closing parenthesis for the SQL string
                sqlStatement += 'D:/Files/UMAProcess2.csv.csv(' + String(row) + '),'
                }


                // remove the last comma, and replace it with a semi-colon
                sqlStatement = sqlStatement.substring(0, sqlStatement.length-1) + ";"

                // log the SQL statement to console
               // console.log("\nsqlStatement:", sqlStatement, "\n")

                // pass the SQL string to the the client.query() method call
                client.query(sqlStatement, (err, res)=>{

                if (err !== undefined) {
                // log the error to console
                console.log("Postgres INSERT error:", err)
                }

                // check if the response is not 'undefined'
                if (res !== undefined) {

                // log the response to console
                console.log("Postgres response:", res)

                if (res.rowCount > 0) {
                console.log("# of records inserted:", res.rowCount)
                } else {
                console.log("No records were inserted.")
                }
                }
                }) // end of client.query()


                // create a read stream for the CSV file
                fs.createReadStream("my-data.csv")

                // handle any errors
                .on('error', (err) => {
              //  console.log("\nfs.createReadStream() error:", err)
              //  console.log("Make sure the path and name for the CSV file are correct.")
                })

                // create a pipe for the CSV file
                .pipe(csv(['id', 'str', 'int', 'bool']))

                // get the data
                .on('data', (dataRow) => {

                // log the data row to the console
                console.log("dataRow:", dataRow);
                console.log("dataRow type:", typeof dataRow);

                // push the data row to the CSV data array
                allRows.push( dataRow )

                })

                // createReadStream ended
                .on('end', () => {
                //console.log('CSV data iteration finished');

                // call the insertRecords() function declared earlier
                insertRecords( allRows )
                });
                client.end();
});

module.exports = router; */