const express = require('express');
const {
    getBootcamps,
    createBootcamp,
    getBootcamp,
    deleteBootcamp,
    updateBootcamp,
    bootcampPhotoUpload
} = require('../controllers/bootcamp');

const BootcampModel = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

const courseRoute = require('./course');
const router = express.Router();

router.use('/:bootcampId/courses', courseRoute);

router.route('/:id/photo').put(bootcampPhotoUpload);

router.route('/')
    .get(advancedResults(BootcampModel, 'courses'),getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)


module.exports = router;
