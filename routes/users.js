var express = require('express');
var router = express.Router();

//var APIService = require('/./lib/APIService');
var APIService    = require(__dirname + '/../lib/APIService');

api = new APIService();


router.post('/login', api.userLogin);
router.get('/:id/offers', api.userOffers);
router.get('/:id/requests/active', api.userActiveRequests);
router.get('/:id/requests', api.userRequests);
router.get('/:id?', api.users);
router.post('/', api.usersAdd);
router.put('/:id', api.usersEdit);
router.delete('/:id', api.usersDelete);

/* GET userlist. */
router.get('/userlist', function(req, res, next) {
    var result;
    var db = req.db;

    db.query('SELECT * from users', function(err, rows, fields) {
        //db.end();
        if (!err) {
            //console.log('The solution is: ', rows.toArray());
            res.json(rows);
        }
        else {
            console.log('Error while performing Query.');
        }
    });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    db.query('INSERT INTO users SET ?', {username: 'new' + Math.random()}, function(err, result) {
        if (err) { throw err; }
        console.log(result.insertId);
        res.json(result.insertId);
    });
});

module.exports = router;
