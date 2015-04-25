var express = require('express');
var router = express.Router();

//var APIService = require('/./lib/APIService');
var APIService    = require(__dirname + '/../lib/APIService');

api = new APIService();

router.get('/active', api.requestsActive);
router.get('/:id/offers', api.requestOffers);
router.get('/:id?', api.requests);
router.post('/', api.requestsAdd);
router.put('/:id', api.requestsEdit);
router.delete('/:id', api.requestsDelete);

module.exports = router;
