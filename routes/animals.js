var express = require('express');
var router = express.Router();

//var APIService = require('/./lib/APIService');
var APIService    = require(__dirname + '/../lib/APIService');

api = new APIService();

router.get('/:id?', api.animals);
router.post('/', api.animalsAdd);
router.put('/:id', api.animalsEdit);
router.delete('/:id', api.animalsDelete);

module.exports = router;
