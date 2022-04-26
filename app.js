var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var csvRouter2 = require('./routes/csvData');
var simpleToRouter = require('./routes/simpleTolowerCase');
var pavankumarRouter = require('./routes/pavankumar_11thMAR2022');
var pavanExampleRouter2 = require('./routes/pavan2');
var umaRouter = require('./routes/umaprocess');
//var samRouter = require('./routes/sample')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",'GET,PUT,DELETE,POST');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/csvFile',csvRouter2);
app.use('/simpleData',simpleToRouter);
app.use('/pavanData',pavankumarRouter);
app.use('/pavanExampleData2',pavanExampleRouter2)
app.use('/umaProcessData',umaRouter);
//app.use('/samplJwtData',samRouter)


app.listen(8082,()=>{
  console.log('server listeninig at 8082')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
