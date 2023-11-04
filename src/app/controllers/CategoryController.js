const CategoryModel = require('../models/Category');
const moment = require('moment-timezone');

class CategoryController {
    constructor() {
        moment.tz.setDefault('Asia/Ho_Chi_Minh');
    }

    index(req, res, next) {
        CategoryModel.find({})
            .then(categories => {
                const plainCategories = categories.map(category => {
                    const plainCategory = category.toObject();
                    plainCategory.createdAt = moment(plainCategory.createdAt).format('DD/MM/YYYY HH:mm');
                    plainCategory.updatedAt = moment(plainCategory.updatedAt).format('DD/MM/YYYY HH:mm');
                    return plainCategory;
                });
                res.locals.success = req.query.success;
                res.render('category/index', { categories: plainCategories });
            })
            .catch(next);
    };

    create(req, res, next) {
        res.render('category/create');
    };

    store(req, res, next) {
        const name = req.body.name;
        const description = req.body.description;
        const category = new CategoryModel({
            name: name,
            description: description
        });

        category.save()
            .then(savedCategory => {
                const redirectURL = '/category?success=Thêm danh mục thành công';
                res.redirect(redirectURL);
            })
            .catch(err => {
                next(err);
            });
    };

    delete(req, res, next) {
        const categoryId = req.params.id;
        CategoryModel.findByIdAndDelete(categoryId)
            .then((deletedCategory) => {
                let redirectURL = '/category?success=Xóa danh mục thành công';
                if (!deletedCategory) {
                    redirectURL = '/category?success=Danh mục không tồn tại';
                }
                res.redirect(redirectURL);
            })
            .catch((err) => {
                next(err);
            });
    }

}

module.exports = new CategoryController();
