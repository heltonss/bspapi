'use strict';

function ShoppingCartModelDAO(model) {
    this.model = model;
};

ShoppingCartModelDAO.prototype.create = function(data, callback) {
    var model = new this.model(data);
    model.save(function(err, result) {
        callback(err, result)
    });

}

ShoppingCartModelDAO.prototype.find = function(query, callback) {
    this.model.find(query).exec(callback);

}

ShoppingCartModelDAO.prototype.findOne = function(_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

ShoppingCartModelDAO.prototype.update = function(_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function(err, result) {
            callback(err, result)
        })

}

ShoppingCartModelDAO.prototype.remove = function(_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function(err, result) {
            callback(err, result)
        });

}

module.exports = function(mongoose) {
    var shoppingCart = mongoose.model('shoppingcarts', {
        name: String,
        description: String,
        price: Number
    });

    return new ShoppingCartModelDAO(shoppingCart);
}