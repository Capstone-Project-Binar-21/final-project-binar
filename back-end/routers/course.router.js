const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/course.controller'),
    multer = require('multer')()

router.post('/create', multer.single('image'), controller.create),
router.get('/:id', controller.getId)
router.get('/', controller.getAll)

module.exports = router