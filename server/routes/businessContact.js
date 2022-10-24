/*******************************
 * File name: businessContact.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.10.23
*******************************/

var express = require('express');
var router = express.Router();
let businessContactController = require('../controllers/businessContact');

// helper function for guard purposes
const requireAuth = (req, res, next) => {
    // check if the user is logged in
    if(!req.isAuthenticated()) return res.redirect('/login');
    next();
}

/* GET Route for the Business Contact List page - READ Operation */
router.get('/', requireAuth, businessContactController.displayHomePage);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, businessContactController.displayAddPage);

/* POST Route for displaying the Add page - CREATE Operation */
router.post('/add', requireAuth, businessContactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, businessContactController.displayEditPage);

/* POST Route for displaying the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, businessContactController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, businessContactController.performDelete);

module.exports = router;
