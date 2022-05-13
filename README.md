# Moringa Bootcamps

> It is a bootcamp management application that allows user to Create Read Update and Delete bootcamps. The project is created using node and expressjs to implement the required API that are used in the frontend implementation of this project.

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.14.13
v14.17.0
```

## Table of contents

- [Project Name](#project-name)
    - [Prerequisites](#prerequisites)
    - [Table of contents](#table-of-contents)
    - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Environment Variables](#configure-your-env-variables)
    - [Authors](#authors)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/munyuaDeveloper/moringa_school_api.git
$ cd moringa_school_api
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add
```
## configure-your-env-variables
Create a file inside the config folder and call it config.env.
Add these lines and provide the values of each variable
```sh
NODE_ENV=development
PORT=
MONGO_URL=(Create a free mongodb cluster and add the db url here)
MAX_FILE_UPLOAD=
FILE_UPLOAD_PATH=public/uploads
```

## Usage

### Serving the app

```sh
$ npm run dev
```

## Author

* **Peter Munyua** - [munyuaDeveloper](https://github.com/munyuaDeveloper)
