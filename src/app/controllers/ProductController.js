// const CategoryModel = require('../models/Category');
const moment = require('moment-timezone');

class ProductController {
    constructor() {
        moment.tz.setDefault('Asia/Ho_Chi_Minh');
    }
    async index(req, res, next) {
        try {
            const categories = await CategoryModel.find({}).exec();
            const plainCategories = categories.map(category => {
                const plainCategory = category.toObject();
                plainCategory.createdAt = moment(plainCategory.createdAt).format('DD/MM/YYYY HH:mm');
                plainCategory.updatedAt = moment(plainCategory.updatedAt).format('DD/MM/YYYY HH:mm');
                return plainCategory;
            });
            res.render('category/index', { categories: plainCategories });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();
