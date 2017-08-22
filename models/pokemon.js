const mongoose = require('mongoose'),
    config = require('../config/database'),
    Type = require('../models/type');

require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;
const pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String
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
    type: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Type'
        }
    ],
    moves: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Move'
        }
    ],
    nextEvolutions: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Pokemon'
        }
    ]
});

const Pokemon = module.exports = mongoose.model('Pokemon', pokemonSchema);

module.exports.addPokemon = function (newPokemon, callback) {
    newPokemon.save(callback);
};

module.exports.getPokemonByName = function (name, callback) {
    const query = {name: name};
    Pokemon.findOne(query)
        .populate('moves')
        .populate('type')
        .exec(callback);
};

module.exports.getPokemonByTypeName = function (type, sort, callback) {
    Type.getTypeByName(type, (err, type) => {
        if (err) throw err;
        if (type === null) {
            type = {_id: null};
        }
        let query = {};
        if (type._id !== null)
            query = {type: type._id};
        Pokemon.find(query)
            .populate("moves")
            .populate("type")
            .sort(sort)
            .exec(callback);
    });
};

module.exports.updatePokemon = function (id, pokemon, options, callback) {
    const query = {_id: id};
    Pokemon.findOneAndUpdate(query, pokemon, options, callback);
};