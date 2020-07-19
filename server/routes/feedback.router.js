const express = require('express');
const feedbackRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

//user posts survey results to server
feedbackRouter.post('/', (req, res) => {
    const feedback = req.body;
    console.log('in / POST:', feedback);
    let queryString = `INSERT INTO "feedback" ( "feeling", "understanding", "support", "comments", "date" ) 
        VALUES ( $1, $2, $3, $4, current_date );`;
    pool.query(queryString,
        [feedback.feeling, feedback.understanding, feedback.support, feedback.comments ]).then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        }) //end query
})


module.exports = feedbackRouter;