const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { swaggerUi, specs } = require('./swagger/swagger')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const likeRouter = require('./routes/like');
const regionRouter = require('./region/region');
const crollRouter = require('./croll/croll');


const app = express();


const cors = require('cors');
app.use(cors());





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/region', regionRouter);
app.use('/croll', crollRouter);
app.use('/search', searchRouter);
app.use('/like', likeRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
