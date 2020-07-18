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
// taskRouter.put('/:id', (req, res) => {
//     console.log('/tasks PUT:', req.params.id);
//     let queryString = `UPDATE todo SET complete = true, date_completed = CURRENT_TIMESTAMP WHERE id = $1;`;
//     //sets boolean to complete and updates date, both will render
//     pool.query(queryString, [req.params.id]).then((result) => {
//         res.send(result.rows);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     })
// });

// DELETE an order
adminRouter.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /admin', error);
        res.sendStatus(500);
    })
});

module.exports = adminRouter;