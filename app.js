const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();
const models = require('./models');


const env = nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(express.static('public'));


models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    app.listen(3001, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);