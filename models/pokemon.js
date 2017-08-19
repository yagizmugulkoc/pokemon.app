const mongoose = require('mongoose'),
    config = require('../config/database');

require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;
const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: SchemaTypes.Double
    },
    height: {
        type: SchemaTypes.Double
    },
    baseAttack: {
        type: Number
    },
    baseDefence: {
        type: Number
    },
    baseStamina: {
        type: Number
    },
    type: {
        type: SchemaTypes.ObjectId,
        ref: 'Type'
    },
    moves: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Move'
        }
    ],
    nextEvolutions: {
        type: Array
    }
});

const Pokemon = module.exports = mongoose.model('Pokemon', pokemonSchema);

module.exports.getPokemonByName = function (name, callback) {
    const query = {name: name};
    Pokemon.findOne(query)
        .populate('moves')
        .exec(callback);
};
