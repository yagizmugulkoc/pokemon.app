const mongoose = require('mongoose'),
    config = require('../config/database');

require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;
const moveSchema = mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: SchemaTypes.ObjectId,
        ref : 'Type'
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
        type: Number
    }
});

const Move = module.exports = mongoose.model('Move', moveSchema);