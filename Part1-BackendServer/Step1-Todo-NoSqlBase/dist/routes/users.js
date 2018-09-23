"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const usersSchema_1 = require("../models/usersSchema");
var router = express.Router();
//check route is working
router.get('/', (req, res) => {
    res.status(200).json("route working!");
});
//route for signup
router.post('/signup', (req, res) => {
    let newUser = new usersSchema_1.default(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.status(500).json("error has been occored!");
        }
        else {
            res.status(200).json("Account has been created!");
        }
    });
});
//login route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json(req.user);
});
//logout request
router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json("succefully logout!");
});
//athenticate user
router.post('/authenticate', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
    }
    else {
        res.status(401).json('user is not logged in!');
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map