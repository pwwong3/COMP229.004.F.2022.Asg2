/**********************
 * File name: index.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.10.14
**********************/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* POST contact page. */
router.post('/contact', function(req, res, next) {
    let contact = {
        "last_name": req.body.last_name,
        "first_name": req.body.first_name,
        "contact_number": req.body.contact_number,
        "email": req.body.email,
        "message": req.body.message,
    };
    console.table(contact); // Capture user contact
    res.send('<script>alert("Email sent.");window.location.href = \'/\';</script>'); // Sent alert message and redirect user to home page
});

module.exports = router;
