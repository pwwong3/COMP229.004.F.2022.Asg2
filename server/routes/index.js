/**********************
 * File name: index.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.10.14
**********************/

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* POST contact page. */
router.post('/contact', indexController.processContactPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for displaying the Login page */
router.post('/login', indexController.processLoginPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);
module.exports = router;
