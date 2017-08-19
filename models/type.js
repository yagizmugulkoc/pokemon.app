const mongoose = require('mongoose'),
    config = require('../config/database');

const SchemaTypes = mongoose.Schema.Types;

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    effectiveAgainst: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Type'
        }
    ],
    weakAgainst: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Type'
        }
    ]
});

const Type = module.exports = mongoose.model('Type', typeSchema);

module.exports.getTypeByName = function (name, callback) {
    const query = {name: name};
    Type.findOne(query)
        .populate('effectiveAgainst')
        .populate('weakAgainst')
        .exec(callback);
};

module.exports.addType = function (newType, callback) {
    newType.save(callback);
};

module.exports.updateType = function (id, type, options, callback) {
  const query = {_id : id};
  Type.findOneAndUpdate(query, type, options, callback);
};

module.exports.listTypes = function (callback, limit) {
  Type.find({})
      .populate('weakAgainst')
      .populate('effectiveAgainst')
      .limit(limit)
      .exec(callback);
};