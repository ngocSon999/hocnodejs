const appRoute = require('./app');
const categoryRoute = require('./categories');
function route(app) {
        app.use('/category', categoryRoute);
    app.use('/', appRoute);
}

module.exports = route;
