var express = require('express');
var router = express.Router();

//var APIService = require('/./lib/APIService');
var APIService    = require(__dirname + '/../lib/APIService');

api = new APIService();

router.get('/:id?', api.offers);
router.post('/', api.offersAdd);
router.put('/:id', api.offersEdit);
router.delete('/:id', api.offersDelete);

module.exports = router;