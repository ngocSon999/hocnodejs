const path = require('path');
const express = require('express');
const morgan = require('morgan');
const expHbs = require('express-handlebars');
const flash = require('express-flash');
const session = require('express-session');

const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Ho_Chi_Minh');

const bodyParser = require('body-parser');

const route = require('./routes');
const db = require('./config/db/index')
//connect DB
db.connect();

const app = express();
const port = 3000;


//sử dụng file tĩnh
app.use(express.static(path.join(__dirname, 'public')));
//HTTP loger
app.use(morgan('combined'));
//flash message
app.use(session({
    secret: 'myapp',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

//Template engine
app.engine(
    'hbs',
    expHbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Sử dụng body-parser để phân tích dữ liệu gửi từ form
app.use(bodyParser.urlencoded({ extended: false }));

//Route init
route(app);

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
});
