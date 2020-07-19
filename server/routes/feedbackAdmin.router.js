const express = require('express');
const adminRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');




//admin sees survey results on /admin
adminRouter.get('/', (req, res) => {
    console.log('/ GET');
    /// - query: SELECT * FROM "feedback" - ///
    let queryString = `SELECT * FROM feedback ORDER BY "id" DESC;`;
    pool.query(queryString).then((result) => {
        // success, show updated table
        res.send(result.rows);
    }).catch((err) => {
        // error
        res.sendStatus(500);
    })
})


//Put request to UPDATE to flagged === true
adminRouter.put('/:id', (req, res) => {
    console.log('/admin PUT:', req.params.id);
    let queryString = `UPDATE feedback SET flagged = true WHERE id = $1;`;
    //sets boolean to complete and updates date, both will render
    pool.query(queryString, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('err', err);
        res.sendStatus(500);
    })
});

// DELETE an order
adminRouter.delete('/:id', (req, res) => {
    console.log('Delete request for id', req.params.id);
    let queryString = `DELETE FROM feedback WHERE id=$1;`;
    pool.query(queryString, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /admin', error);
        res.sendStatus(500);
    })
});

module.exports = adminRouter;