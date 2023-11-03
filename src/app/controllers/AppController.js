class AppController {
    index(req, res) {
        res.render('home');
    }
}

module.exports = new AppController();
