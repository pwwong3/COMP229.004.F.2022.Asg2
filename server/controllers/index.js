/*******************************
 * File name: index.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.10.23
*******************************/

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// create the User Model instance
const userModel = require('../models/user');
const User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => res.render('index', { title: 'Home' });

module.exports.displayAboutPage = (req, res, next) => res.render('about', { title: 'About me' });

module.exports.displayProjectsPage = (req, res, next) => res.render('projects', { title: 'Projects' });

module.exports.displayServicesPage = (req, res, next) => res.render('services', { title: 'Services' });

module.exports.displayContactPage = (req, res, next) => res.render('contact', { title: 'Contact' });

module.exports.processContactPage = (req, res, next) => {
    let contact = {
        "last_name": req.body.last_name,
        "first_name": req.body.first_name,
        "contact_number": req.body.contact_number,
        "email": req.body.email,
        "message": req.body.message,
    };
    console.table(contact); // Capture user contact
    res.send('<script>alert("Email sent.");window.location.href = \'/\';</script>'); // Sent alert message and redirect user to home page
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already login
    if(req.user) return res.redirect('/');
    res.render('auth/login', {
         title: 'Login',
        messages: req.flash('loginMessage'),
        displayName: ''
    });
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // server error?
        if (err) return next(err);
        // is there a user login error?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, err => {
            // server error?
            if (err) return next(err);
            return res.redirect('/business-contact');
        });
    })(req, res, next);
}

module.exports.performLogout = (req, res, next) => {
    req.logout(err => {
        if (err) { return next(err); }
        res.redirect('/');
    });
}