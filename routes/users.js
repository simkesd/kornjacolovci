var express = require('express');
var router = express.Router();

/* GET userlist. */
router.get('/userlist', function(req, res, next) {
    var result;
    var db = req.db;
    //db.connect(function(err){
    //    if(!err) {
    //        console.log("Database is connected ... \n\n");
    //    } else {
    //        console.log("Error connecting database ... \n\n");
    //    }
    //});

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
