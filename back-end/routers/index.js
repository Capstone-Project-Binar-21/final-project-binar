const express = require('express'),
    router = express.Router(),
    courseRouter = require('./course.router')

router.use('/course', courseRouter)

module.exports = router