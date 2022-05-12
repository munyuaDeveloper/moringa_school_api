const express = require('express');
const { getCourses, getCourse, addCourse, updateCourse, deleteCourse} = require('../controllers/course');
const CourseModel = require('../models/Course');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({mergeParams: true});

router.route('/')
    .get(advancedResults(CourseModel, {
        path: 'bootcamp',
        select: 'name description'
    }), getCourses)
    .post(addCourse);

router.route('/:id')
    .get(getCourse)
    .put(updateCourse)
    .delete(deleteCourse);

module.exports = router;
