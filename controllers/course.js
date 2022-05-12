const CourseModel = require('../models/Course');
const BootcampModel = require('../models/Bootcamp')
const asyncHandler = require("../utils/async");
const ErrorResponse = require("../utils/errorResponse");

// @Desc Get all courses
// @route GET api/v1/courses
// @route GET api/v1/bootcamps/:bootcampId/courses
// @access Public
exports.getCourses = asyncHandler(async (req, res, next) => {
    if (req.params.bootcampId){
        const courses = await CourseModel.find({bootcamp: req.params.bootcampId});
        res.status(200).json({success: true, results: courses.length, data: courses});
    }else {
        res.status(200).json(res.advancedResults);
    }
});


// @Desc Get single course
// @route GET api/v1/courses/:id
// @access Public
exports.getCourse = asyncHandler(async (req, res, next) => {
   const course = await CourseModel.findById(req.params.id).populate({
        path: 'bootcamp',
        select: 'name description'
    });
    if (!course) {return next(new ErrorResponse(`No course found with id of ${req.params.id}`, 404))}

    res.status(200).json({success: true, data: course});
});


// @Desc Add course
// @route POST api/v1/bootcamps/:bootcampId/courses
// @access Public
exports.addCourse = asyncHandler(async (req, res, next) => {
    req.body.bootcamp = req.params.bootcampId;
    const bootcamp = await BootcampModel.findById(req.params.bootcampId);

    if (!bootcamp) {return next(new ErrorResponse(`No bootcamp found with id of ${req.params.bootcampId}`, 404))}

    const course = await CourseModel.create(req.body);

    res.status(200).json({success: true, data: course});
});

// @Desc Update course
// @route PUT api/v1/courses/:id
// @access Public
exports.updateCourse = asyncHandler(async (req, res, next) => {
    let course = await CourseModel.findById(req.params.id);

    if (!course) {return next(new ErrorResponse(`No course found with id of ${req.params.id}`, 404))}

    course = await CourseModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({success: true, data: course});
});

// @Desc Delete Course
// @route GET api/v1/courses/:id
// @access Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
    const course = await CourseModel.findById(req.params.id);

    if (!course){
        return next(new ErrorResponse(`No course found with id of ${req.params.id}`, 404))
    }

    course.remove();
    res.status(204).json({success: true, data: course});
});
