const router = require('express').Router();
let Map = require('../models/map.model');

router.route('/').get((req, res) => {
    Map.find()
    .then(maps => {
        res.json(maps)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const url = req.body.url;

    const newMap = new Map({
        name, url
    });

    newMap.save()
    .then(() => res.json('Map Saved!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req, res) => {
    Map.findByIdAndDelete(req.params.id)
    .then(map => res.json("Map Deleted."))
    .catch(err => res.status(400).json('Error: '+ err))
});

module.exports = router;