'use strict';

var mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'kornjacolovci'
});


db.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log(err);
        console.log("Error connecting database ... \n\n");
    }
});

var APIService = (function() {

    function query(query, params, res) {
        db.query(query, params,  function(err, rows, fields) {
            if (!err) {
                if(rows.length == 1) {
                    res.json(rows[0]);
                }else {
                    res.json(rows);
                }
            }
            else {
                console.log('Error while performing Query.');
                res.json({
                    error: 'DB failed',
                    details: err
                });
            }
        });
    }

    function users(req, res) {
        var id = req.params.id;
        if(id) {
            query('SELECT * from user where ID = ?', [id], res);
        }else {
            query('SELECT * from user', [], res);
        }
    }

    function usersEdit(req, res) {
        var id = req.params.id;
        query('UPDATE user SET username = ? WHERE ID = ? ', [req.body.username, id], res);
    }

    function usersDelete(req, res) {
        var id = req.params.id;
        query('DELETE FROM user WHERE id = ? ', [id], res);
    }

    function usersAdd(req, res) {
        query('INSERT INTO user (username, password) VALUES (?, ?)', [req.body.username, req.body.password], res);
    }

    function requests(req, res) {
        var id = req.params.id;
        if(id) {
            query('SELECT r.*, a.name as animal_name from request as r LEFT JOIN animal as a on a.ID = r.animal_ID where r.ID = ?', [id], res);
        }else {
            query('SELECT r.*, a.name as animal_name from request as r LEFT JOIN animal as a on a.ID = r.animal_ID', [], res);
        }
    }

    function requestsEdit(req, res) {
        var id = req.params.id;
        query('UPDATE request SET quantity = ? WHERE ID = ? ', [req.body.quantity, id], res);
    }

    function requestsDelete(req, res) {
        var id = req.params.id;
        query('DELETE FROM request WHERE ID = ? ', [id], res);
    }

    function requestsAdd(req, res) {
        console.log(req.body.delivery_date);
        query('INSERT INTO request (animal_ID, quantity, weight, delivery_date, user_ID, creation_time) VALUES (?, ?, ?, ?, ?, ?)', [req.body.animal_ID, req.body.quantity, req.body.weight, req.body.delivery_date, req.body.user_ID, req.body.creation_time], res);
    }

    function requestsActive(req, res) {
        query('SELECT * FROM request WHERE delivery_date > now() AND offer_ID is NULL', [], res);
    }

    function requestOffers(req, res) {
        var id = req.params.id;
        query('SELECT * FROM request WHERE ID = ?', [id], res);
    }

    function animals(req, res) {
        var id = req.params.id;
        if(id) {
            query('SELECT * from animal where ID = ?', [id], res);
        }else {
            query('SELECT * from animal', [], res);
        }
    }

    function animalsEdit(req, res) {
        var id = req.params.id;
        query('UPDATE animal SET quantity = ? WHERE ID = ? ', [req.body.quantity, id], res);
    }

    function animalsDelete(req, res) {
        var id = req.params.id;
        query('DELETE FROM animal WHERE ID = ? ', [id], res);
    }

    function animalsAdd(req, res) {
        query('INSERT INTO animal (name) VALUES (?)', [req.body.name], res);
    }

    function offers(req, res) {
        var id = req.params.id;
        if(id) {
            query('SELECT * from offer where ID = ?', [id], res);
        }else {
            query('SELECT * from offer', [], res);
        }
    }

    function offersEdit(req, res) {
        var id = req.params.id;
        query('UPDATE offer SET quantity = ? WHERE ID = ? ', [req.body.quantity, id], res);
    }

    function offersDelete(req, res) {
        var id = req.params.id;
        query('DELETE FROM offer WHERE ID = ? ', [id], res);
    }

    function offersAdd(req, res) {
        query('INSERT INTO offer (offerer_ID, request_ID, price, details) VALUES (?, ?, ?, ?)', [req.body.offerer_ID, req.body.request_ID, req.body.price, req.body.details], res);
    }

    var constructor = function Constructor() {

    };
    constructor.prototype.users = users;
    constructor.prototype.usersEdit = usersEdit;
    constructor.prototype.usersDelete = usersDelete;
    constructor.prototype.usersAdd = usersAdd;

    constructor.prototype.requests = requests;
    constructor.prototype.requestsEdit = requestsEdit;
    constructor.prototype.requestsDelete = requestsDelete;
    constructor.prototype.requestsAdd = requestsAdd;
    constructor.prototype.requestsActive = requestsActive;
    constructor.prototype.requestOffers = requestOffers;

    constructor.prototype.animals = animals;
    constructor.prototype.animalsEdit = animalsEdit;
    constructor.prototype.animalsDelete = animalsDelete;
    constructor.prototype.animalsAdd = animalsAdd;

    constructor.prototype.offers = offers;
    constructor.prototype.offersEdit = offersEdit;
    constructor.prototype.offersDelete = offersDelete;
    constructor.prototype.offersAdd = offersAdd;

    return constructor;
})();

module.exports = APIService;
