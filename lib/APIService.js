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

    function requests(req, res) {
        var id = req.params.id;
        if(id) {
            query('SELECT * from users where id = ?', [id], res);
        }else {
            query('SELECT * from users', [], res);
        }
    }

    function requestsEdit(req, res) {
        var id = req.params.id;
        query('UPDATE users SET username = ? WHERE id = ? ', [req.body.username, id]);
    }

    function usersDelete(req, res) {
        var id = req.params.id;
        query('DELETE FROM users WHERE id = ? ', [id]);
    }

    function usersAdd(req, res) {
        query('INSERT INTO users (username) VALUES (?)', [req.body.username]);
    }

    function users(req, res) {
        var id = req.params.id;
        if(id) {
            query('SELECT * from users where id = ?', [id], res);
        }else {
            query('SELECT * from users', [], res);
        }
    }

    function usersEdit(req, res) {
        var id = req.params.id;
        query('UPDATE users SET username = ? WHERE id = ? ', [req.body.username, id]);
    }

    function usersDelete(req, res) {
        var id = req.params.id;
        query('DELETE FROM users WHERE id = ? ', [id]);
    }

    function usersAdd(req, res) {
        query('INSERT INTO users (username) VALUES (?)', [req.body.username]);
    }

    var constructor = function Constructor() {

    };
    constructor.prototype.users = users;
    constructor.prototype.usersEdit = usersEdit;
    constructor.prototype.usersDelete = usersDelete;
    constructor.prototype.usersAdd = usersAdd;

    return constructor;
})();

module.exports = APIService;
