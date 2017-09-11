'use strict'
var debug = require('debug')('bspapi:controller')
var Promise = require('bluebird');

function ProductsController(ProductsModel) {
    this.model = Promise.promisifyAll(ProductsModel);
}

ProductsController.prototype.getAll = function(req, res, next) {
    this.model.findAsync({})
        .then(function(data) {
            res.json(data);
        })
        .catch(next);
}

ProductsController.prototype.create = function(req, res, next) {
    var body = req.body
    this.model.createAsync(body)
        .then(function(err, data) {
            res.json(data);
        })
        .catch(next);
}

ProductsController.prototype.getById = function(req, res, next) {
    var _id = req.params._id;
    this.model.findOneAsync(_id)
        .then(function(data) {
            res.json(data);
        })
        .catch(next);
}

ProductsController.prototype.update = function(req, res, next) {
    var _id = req.params._id;
    var body = req.body;
    this.model.updateAsync(_id, body)
        .then(function(data) {
            res.json(data);
        })
        .catch(next);
}

ProductsController.prototype.remove = function(req, res, next) {
    var _id = req.params._id;
    this.model.removeAsync(_id)
        .then(function(data) {
            res.json(data);
        })
        .catch(next);
}

module.exports = function(ProductsModel) {
    return new ProductsController(ProductsModel);
};