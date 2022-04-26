var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

router.get('/',(req,res,next)=>{
  var data = [
    {
      name : 'pavan',
      age : 24,
      location : 'nellore'
    }
  ]
  var jsonData = data;
  res.send(JSON.stringify(jsonData))
}); 

/* const secretValue = 'pavankumar2218_rampathati'
const token = jwt.sign('id : 123455678 ',secretValue,{expiresIn:Math.floor(Date.now() / 1000) + (60 * 60) });
console.log('token :-' , token);

jwt.verify(token,secretValue,(err,decoded)=>{
  console.log(' decoded ::' , decoded)
}) */

module.exports = router;
