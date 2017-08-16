const mongoose = require('mongoose'),
    config = require('../config/database');

const typeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    effectiveAgainst: {
        type: Array
    },
    weakAgainst: {
        type: Array
    }
});

const Type = module.exports = mongoose.model('Type', typeSchema);

module.exports.getTypeByName = function (name, callback) {
    const query = {name: name};
    Type.findOne(query, callback);
};

module.exports.addType = function (newType, callback) {
    newType.save(callback);
};