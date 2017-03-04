var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var apiKeyboard = require('./api/keyboard');
var apiMessage = require('./api/message');
var apiFriend = require('./api/friend');
var apiChatRoom = require('./api/chat_room');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/* Add APIs */
app.use('/keyboard', apiKeyboard);
app.use('/message', apiMessage);
app.use('/friend', apiFriend);
app.use('/chat_room', apiChatRoom);

/* Catch 404 and forward to error handler. */
app.use(function(err, req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* Error handler */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status || 500);
});

module.exports = app;
