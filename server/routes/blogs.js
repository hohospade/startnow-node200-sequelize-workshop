const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Blog = require('../db/models');
// const Author = require('../models/author');
let dbUser = null;


// PASSING
router.get('/', (req, res) => {
    models.Blog.findAll()
        .then(blog => {
            res.status(200).json(blog);

        });
});
// PASSING
router.get('/featured', (req, res) => {
    models.Blog.findAll({ where: { featured: true } })
        .then(blog => {
            res.status(200).json(blog);
        }).catch(err => res.status(500).send());
});

// PASSING
router.get('/:id', (req, res) => {
    models.Blog.findById(req.params.id)
        .then(blog => {
            if (blog) {
                return res.status(200).json(blog);
            }
            else { res.status(404).json(blog) }
        });

});


// PASSING
router.post('/', (req, res) => {
    const newBlog = (req.body);
    newBlog.authorId = req.query.authorId
    models.Blog.create({ ...newBlog })
        .then(blog => {
            res.status(201).json(blog);
        });
});


// router.put('/:id', (req, res) => {
//     models.Blog.save(req.params.id, req.body)
//         .then(blog => {
//             res.status(204).json(blog);
//         });
// });

router.put('/:id', (req, res) => {
    models.Blog.update(req.body,{ where: {id: req.params.id } })
        .then(blog => {
            res.status(204).json(blog);
        });
});



// PASSING
router.delete('/:id', (req, res) => {
    if (req.params.id) {
        models.Blog.destroy({ where: { id: req.params.id } })
            .then(blog => {
                res.status(200).json(blog);
            })
    }
});



module.exports = router;