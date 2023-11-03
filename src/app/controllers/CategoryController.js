class CategoryController {
    index(req, res) {
        res.render('category/index');
    }
}

module.exports = new CategoryController();
