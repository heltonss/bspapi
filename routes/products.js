'use strict';
var express = require('express');
var router = express.Router();

var mongoose = require('../db/mongoose');
var ProductsModel = require('../models/productsModel')(mongoose);
var ProductsController = require('../controllers/productsController')(ProductsModel);

router.get('/', ProductsController.getAll.bind(ProductsController));
router.post('/', ProductsController.create.bind(ProductsController));
router.get('/:_id', ProductsController.getById.bind(ProductsController));
router.put('/:_id', ProductsController.update.bind(ProductsController));
router.delete('/:_id', ProductsController.remove.bind(ProductsController));

module.exports = router;