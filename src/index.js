const path = require('path');
const express = require('express');
const expHbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');

//sử dụng file tĩnh
app.use(express.static(path.join(__dirname, 'public')));
//HTTP loger
app.use(morgan('combined'));

//Template engine
app.engine(
                    'hbs',
                    expHbs.engine({
                        extname: '.hbs',
                    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
