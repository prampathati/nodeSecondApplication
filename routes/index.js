var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
  res.send('this is the index page')
})

module.exports = router; 