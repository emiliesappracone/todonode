const express = require('express');
const router = express.Router();

/*
Routes
*/
router.get('/', (req, resp) => {

    req.getConnection((error, connexion) => {
        if (error) {
            console.log(error);
            resp.status(500).render('error', {error});
        } else {
            connexion.query('SELECT * FROM notes', [], (error, notes) => {
                if (error) {
                    console.log(error);
                    resp.status(500).render('error', {error});
                } else {
                    resp.status(200).render('index', {notes});
                }
            });
        }
    });
});

router.post('/add-notes', (req, resp) => {
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;

    req.getConnection((error, connexion) => {
        if (error) {
            console.log(error);
            resp.status(500).render('error', {error});
        } else {
            let query = '';
            let params = [];
            if (id) {
                query = 'UPDATE notes SET title = ?, description = ? WHERE id = ?';
                params = [title, description, id];
            } else {
                query = 'INSERT INTO notes (title, description) VALUES(?,?)';
                params = [title, description];
            }
            connexion.query(query, params, (error, notes) => {
                if (error) {
                    console.log(error);
                    resp.status(500).render('error', {error});
                } else {
                    resp.status(200).redirect('/');
                }
            });
        }
    });
});

router.delete('/delete-notes/:id', (req, resp) => {
    let id = req.params.id;

    req.getConnection((error, connexion) => {
        if (error) {
            console.log(error);
            resp.status(500).render('error', {error});
        } else {
            let query = '';
            let params = [];
            if (id) {
                query = 'DELETE FROM notes WHERE id = ?';
                params = [id];
                connexion.query(query, params, (error, result) => {
                    if (error) {
                        console.log(error);
                        resp.status(500).render('error', {error});
                    } else {
                        resp.status(200).json({routeRacine: '/'});
                    }
                });
            }
        }
    });
});

module.exports = router;