const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')
const morgan = require('morgan');
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error');
const fileupload = require('express-fileupload');
const compression = require('compression')
const path = require('path');
// Load ENV var
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

// Import Routes
const bootcamp = require('./routes/bootcamp');
const course = require('./routes/course');
const users = require('./routes/users');

const cookieParser = require('cookie-parser')
const cors = require("cors");

const app = express();

app.use(cors())

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(compression())

app.use('/api/v1/bootcamps', bootcamp);
app.use('/api/v1/courses', course);
app.use('/api/v1/users', users);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

//  Handle unhandled promise rejections

process.on('unhandledRejection', (error, promise)=> {
    console.log(`Error: ${error.message}`.red);
    // Close the server & exit process
    server.close(()=> process.exit(1));
});
