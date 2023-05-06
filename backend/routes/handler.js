const express = require('express');
const router = express.Router();
const pool =  require('../config/db.js');


router.get('/products', async (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;
        try {
            const qry = 'SELECT * FROM Products'
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }

    });

});

router.get('/employees', async (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;
        try {
            const qry = 'SELECT * FROM employee'
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }

    });

});

router.get('/department', async (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;
        try {
            const qry = 'SELECT * FROM department'
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }

    });

});

router.get('/account', async (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;
        try {
            const qry = 'SELECT * FROM account'
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }

    });

});



module.exports = router;