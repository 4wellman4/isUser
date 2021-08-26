const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const indexRoutes = require('./routes/index');
const yesRoutes = require('./routes/yes');
const noRouters = require('./routes/no');
const open = require('open');

const host = '127.0.0.1';
const port = 8080;

const hbs = exphbs.create({
    defaultLayout: 'custom',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use('/', indexRoutes);
app.use('/yes', yesRoutes);
app.use('/no', noRouters);

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));

open(`http://${host}:${port}`);