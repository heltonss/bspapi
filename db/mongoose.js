var mongoose = require('mongoose');
var debug = require('debug')('bsp-api:db');

var config = require('config');

function _connection() {
    var username = config.get('mongodb.username');
    var password = config.get('mongodb.password');;
    var server = config.get('mongodb.server');;
    var port = config.get('mongodb.port');;
    var database = config.get('mongodb.database');;
    var auth = username ? username + ':' + password + '@' : '';
    console.log('mongodb://' + auth + server + ':' + port + '/' + database)
    return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

mongoose.connect(_connection());

var db = mongoose.connection;

db.on('error', function(err) {
    debug(err)
    console.log(err)
});

db.once('open', function(callback) {
    debug('connected to the mongodb');
});

module.exports = mongoose;