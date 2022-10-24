/*******************************
 * File name: businessContact.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.10.23
*******************************/

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// create the User Model instance
const businessContactModel = require('../models/businessContact');
const BusinessContact = businessContactModel.BusinessContact; // alias

module.exports.displayHomePage = (req, res, next) => {
    BusinessContact.find((err, businessContacts) => {
        if (err) return console.error(err);
        res.render('business_contact/contacts', { title: 'Business Contacts', BusinessContacts: businessContacts });
    });
};

module.exports.displayAddPage = (req, res, next) => res.render('business_contact/add', { title: 'Add Contact' });

module.exports.processAddPage = (req, res, next) => {
    const newContact = BusinessContact({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });
    
    BusinessContact.create(newContact, (err, Contact) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the business contacts
            res.redirect('/business-contact');
        }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BusinessContact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else{
            // show the edit view
            res.render('business_contact/edit', { title: 'Edit Contact', contact: contactToEdit });
        }
    });
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    const updatedContact = BusinessContact({
        _id: id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    BusinessContact.updateOne({_id: id}, updatedContact, err => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the business contacts
            res.redirect('/business-contact');
        }
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BusinessContact.remove({_id: id}, err => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the business contacts
            res.redirect('/business-contact');
        }
    });
}