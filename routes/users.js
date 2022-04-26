var express = require('express');
var router = express.Router();

router.post('/',(req,res,next)=>{
  res.send('this is the users page')
})

module.exports = router;
