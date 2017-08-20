const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    config = require('../config/database'),
    Type = require('../models/type'),
    Move = require('../models/move'),
    Pokemon = require('../models/pokemon');

router.post('/addType', (req, res, next) => {
    let newType = new Type({
        name: req.body.name,
        effectiveAgainst: req.body.effectiveAgainst.map((effectiveType) => {
            return mongoose.Types.ObjectId(effectiveType);
        }),
        weakAgainst: req.body.weakAgainst.map((weakType) => {
            return mongoose.Types.ObjectId(weakType);
        })
    });
    Type.addType(newType, (err, type) => {
        if (err)
            res.json({success: false, msg: 'failed to add type'});
        else
            res.json({success: true, msg: 'Type has been added'});
    });
});

router.put('/updateType/:_id', (req, res, next) => {
    const id = req.params._id;
    const type = {};
    type.name = req.body.name;
    type.weakAgainst = req.body.weakAgainst.map((weakType) => {
        return mongoose.Types.ObjectId(weakType);
    });
    type.effectiveAgainst = req.body.effectiveAgainst.map((effectiveType) => {
        return mongoose.Types.ObjectId(effectiveType);
    });
    Type.updateType(id, type, {}, (err, updatedType) => {
        if (err) throw err;
        res.json(updatedType);
    });
});

router.get('/list/types', (req, res, next) => {
    Type.listTypes((err, types) => {
        if (err) throw err;
        res.json(types);
    });
});

router.get('/list', (req, res) => {
    const type = req.query.type;
    const sort = req.query.sortby;
    Pokemon.getPokemonByTypeName(type, sort, (err, pokemon) => {
        if (err) throw err;
        res.json(pokemon);
    });
});

router.get('/type/:_name', (req, res) => {
    Type.getTypeByName(req.params._name, (err, type) => {
        if (err) throw err;
        res.json(type);
    });
});

router.post('/addMove', (req, res, next) => {
    let newMove = new Move({
        name: req.body.name,
        type: mongoose.Types.ObjectId(req.body.type),
        damage: req.body.damage,
        energy: req.body.energy,
        dps: req.body.dps,
        duration: req.body.duration
    });

    Move.addMove(newMove, (err, move) => {
        if (err)
            res.json({success: false, msg: 'failed to add move'});
        else
            res.json({success: true, msg: 'Move has been added'});
    });
});

router.get('/list/moves', (req, res) => {
    Move.listAllMoves((err, moves) => {
        if (err) throw err;
        res.json(moves);
    });
});

router.get('/move', (req, res) => {
    const type = req.query.type;
    Move.listMovesByType(type, (err, move) => {
        if (err) throw err;
        res.json(move);
    })
});

router.post('/addPokemon', (req, res, next) => {
    let newPokemon = new Pokemon({
        name: req.body.name,
        type: mongoose.Types.ObjectId(req.body.type),
        weight: req.body.weight,
        height: req.body.height,
        baseAttack: req.body.baseAttack,
        baseDefence: req.body.baseDefence,
        baseStamina: req.body.baseStamina,
        moves: req.body.moves.map((move) => {
            return mongoose.SchemaTypes.ObjectId(move);
        }),
        nextEvolutions: req.body.nextEvolutions
    });

    Pokemon.addPokemon(newPokemon, (err, pokemon) => {
        if (err)
            res.json({success: false, msg: 'failed to add pokemon'});
        else
            res.json({success: true, msg: 'Pokemon has been added'});
    });
});

router.get('/get', (req, res) => {
    const type = req.query.type;
    Pokemon.getPokemonByTypeName(type, null, (err, pokemon) => {
        if (err) throw err;
        res.json(pokemon);
    });
});

router.get('/get/:pokemonName', (req, res) => {
    Pokemon.getPokemonByName(req.params.pokemonName, (err, pokemon) => {
        if (err) throw err;
        res.json(pokemon);
    });
});

router.get('/:pokemonName', (req, res) => {
    Pokemon.getPokemonByName(req.params.pokemonName, (err, pokemon) => {
        if (err) throw err;
        res.json(pokemon);
    });
});

router.put('/updatePokemon/:_id', (req, res, next) => {
    const pokemon = {};
    pokemon.moves = req.body.moves.map((move) => {
        return mongoose.Types.ObjectId(move);
    });
    pokemon.nextEvolutions = req.body.nextEvolutions.map((nextEvolution) => {
        return mongoose.Types.ObjectId(nextEvolution);
    });
    Pokemon.updatePokemon(req.params._id, pokemon, {}, (err, updatedPokemon) => {
        if (err) throw err;
        res.json(updatedPokemon);
    });
});

module.exports = router;