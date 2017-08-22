const mongoose = require('mongoose'),
    config = require('../config/database'),
    Type = require('../models/type');

require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;
const moveSchema = mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: SchemaTypes.ObjectId,
        ref: 'Type'
    },
    imageUrl: {
        type: String
    },
    damage: {
        type: Number
    },
    energy: {
        type: Number
    },
    dps: {
        type: SchemaTypes.Double
    },
    duration: {
        type: SchemaTypes.Double
    }
});

const Move = module.exports = mongoose.model('Move', moveSchema);

module.exports.addMove = function (newMove, callback) {
    newMove.save(callback);
};

module.exports.listMovesByType = function (typeName, callback) {
    Type.getTypeByName(typeName, (err, type) => {
        if (err) throw err;
        if (type === null) {
            type = {};
            type._id = null;
        }
        const query = {type: type._id};
        Move.find({})
            .where(query)
            .populate("type")
            .exec(callback);
    });
};

module.exports.listAllMoves = function (callback, limit) {
    Move.find({})
        .populate("type")
        .limit(limit)
        .exec(callback);
};