const express = require('express');
const logger = require('./src/middlewares/logger');
const taskRouter = require('./src/routes/task');

//App
const app = express();


//Middleware

app.use(express.json());
app.use(express.static('./public'));
app.use(logger);

//Routes
app.use('/api/v1/task', taskRouter);


module.exports = app;