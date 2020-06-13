var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var serveIndex = require('serve-index');

var fetchRouter = require('./routes/fetch_api');  // routes to /list_posts
var indexRouter = require('./routes/index');  // routes to /

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



// Route for fetching public resources
app.use('/public', express.static(path.join(__dirname, 'public_resources')));
// Route for Serve-Index fetching Posts
app.use('/posts', express.static(path.join(__dirname, 'public_resources/posts')), serveIndex(path.join(__dirname, 'public_resources/posts')));
// Routes for api fetching
app.use('/api', fetchRouter);
// Ensures the react app can fetch all of the css and js file as it need
app.use(express.static(path.join(__dirname, 'public')));
// If none matched, fetch the home page via indexRouter
app.use ('/', indexRouter);

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
