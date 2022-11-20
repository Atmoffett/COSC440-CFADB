const express = require('express');
const router = express.Router();
const pool =  require('../config/db.js');

router.get('/tweets', async (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT u.username, u.fullname, t.tweet FROM users as u INNER JOIN tweets as t ON u.id=t.user_id`;
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

router.post('/addTweet', async (req, res) => {
    const userTweet = req.body.tweetInput;
    const userId = 1; // 1=codrkai, 2=eaglefang

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        const qry = `INSERT INTO tweets(tweet, user_id) VALUES(?,?)`;

       // const qry = 'SELECT * FROM products'
        conn.query(qry, [userTweet, userId], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log('Tweet added!');
        });

        res.redirect('/tweets');
        res.end();
    });
});

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

module.exports = router;