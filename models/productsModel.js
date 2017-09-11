'use strict';

function ProductsModelDAO(model) {
    this.model = model;
};

ProductsModelDAO.prototype.create = function(data, callback) {
    var model = new this.model(data);
    model.save(function(err, result) {
        callback(err, result)
    });

}

ProductsModelDAO.prototype.find = function(query, callback) {
    this.model.find(query).exec(callback);

}

ProductsModelDAO.prototype.findOne = function(_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

ProductsModelDAO.prototype.update = function(_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function(err, result) {
            callback(err, result)
        })

}

ProductsModelDAO.prototype.remove = function(_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function(err, result) {
            callback(err, result)
        });

}

module.exports = function(mongoose) {
    var products = mongoose.model('products', {
        name: String,
        description: String,
        price: Number
    });

    return new ProductsModelDAO(products);
}