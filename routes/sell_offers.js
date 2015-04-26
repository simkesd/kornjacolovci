var express = require('express');
var router = express.Router();

//var APIService = require('/./lib/APIService');
var APIService    = require(__dirname + '/../lib/APIService');

api = new APIService();

router.get('/:id?', api.sell_offers);
router.post('/', api.sell_offersAdd);
router.put('/:id', api.sell_offersEdit);
router.delete('/:id', api.sell_offersDelete);

module.exports = router;
