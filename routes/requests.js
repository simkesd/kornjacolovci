var express = require('express');
var router = express.Router();

//var APIService = require('/./lib/APIService');
var APIService    = require(__dirname + '/../lib/APIService');

api = new APIService();

router.get('/:id?', api.requests);
router.get('/active', api.requestsActive);
router.post('/', api.requestsAdd);
router.put('/:id', api.requestsEdit);
router.delete('/:id', api.requestsDelete);

module.exports = router;
