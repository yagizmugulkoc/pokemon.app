const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    config = require('../config/database'),
    Type = require('../models/type');

router.post('/addType', (req, res, next) => {
    let newType = new Type({
        name: req.body.name,
        effectiveAgainst: req.body.effectiveAgainst,
        weakAgainst: req.body.weakAgainst
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

module.exports = router;