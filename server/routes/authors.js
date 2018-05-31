const models = require('../db/models');
const express = require('express');
const router = express.Router();

// PASSING
router.get('/', (req, res) => {
    models.Author.findAll()
        .then(author => {
            res.status(200).json(author);

        });
});
// PASSING
router.get('/:id', (req, res) => {
    models.Author.findById(req.params.id)
        .then(author => {
            if (!author) res.status(404).send();
            res.status(200).json(author);
        }).catch(err => res.status(404))
});

// PASSING
router.get('/:id/blogs', (req, res) => {
    models.Blog.findAll({ where: { authorId: req.params.id } })
        .then(blogs => {
            res.status(200).json(blogs);
        })
});




// PASSING
router.post('/', (req, res) => {
    const newAuthor = (req.body);
    newAuthor.authorId = req.query.authorId
    models.Author.create({ ...newAuthor })
        .then(author => {
            res.status(201).json(author);
        });
});


// PASSING
router.put('/:id', (req, res) => {
    models.Author.update(req.body,{ where: {id: req.params.id } })
        .then(author => {
            res.status(204).json(author);
        });
});

// PASSING
router.delete('/:id', (req, res) => {
    if (req.params.id) {
        models.Author.destroy({ where: { id: req.params.id } })
            .then(author => {
                res.status(200).json(author);
            })
    }
});



module.exports = router;