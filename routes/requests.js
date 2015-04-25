var express = require('express');
var router = express.Router();

//var APIService = require('/./lib/APIService');
var APIService    = require(__dirname + '/../lib/APIService');

api = new APIService();

router.get('/:id?', api.users);
router.post('/', api.usersAdd);
router.put('/:id', api.usersEdit);
router.delete('/:id', api.usersDelete);

module.exports = router;
