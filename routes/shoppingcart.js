'use strict';
var express = require('express');
var router = express.Router();

var mongoose = require('../db/mongoose');
var ShoppingCartModel = require('../models/shoppingCartModel')(mongoose);
var ShoppingCartController = require('../controllers/shoppingCartController')(ShoppingCartModel);

router.get('/', ShoppingCartController.getAll.bind(ShoppingCartController));
router.post('/', ShoppingCartController.create.bind(ShoppingCartController));
router.get('/:_id', ShoppingCartController.getById.bind(ShoppingCartController));
router.put('/:_id', ShoppingCartController.update.bind(ShoppingCartController));
router.delete('/:_id', ShoppingCartController.remove.bind(ShoppingCartController));

module.exports = router;