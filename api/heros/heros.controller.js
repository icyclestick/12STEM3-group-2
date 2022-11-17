var Heros = require('./heros.dao');

exports.createHero = function (req, res, next) {
    var hero = {
        tag: req.body.tag,
        type: req.body.type,
        weight: req.body.weight,
        targetWeight: req.body.targetWeight
    };

    Heros.create(hero, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero created successfully"
        })
    })
}

exports.getHeros = function(req, res, next) {
    Heros.get({}, function(err, heros) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.getHero = function(req, res, next) {
    Heros.get({name: req.params.name}, function(err, heros) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.updateHero = function(req, res, next) {
    var hero = {
        tag: req.body.tag,
        type: req.body.type,
        weight: req.body.weight,
        targetWeight: req.body.targetWeight
    }
    Heros.update({_id: req.params.id}, hero, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero updated successfully"
        })
    })
}

exports.removeHero = function(req, res, next) {
    Heros.delete({_id: req.params.id}, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero deleted successfully"
        })
    })
}