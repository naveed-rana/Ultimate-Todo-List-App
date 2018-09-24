"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
const passport_local_1 = require("passport-local");
const Sqlconnection_1 = require("../../Sqlconnection");
function default_1() {
    passport.use(new passport_local_1.Strategy({ usernameField: 'email' }, function (email, password, done) {
        Sqlconnection_1.default.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
            .then(function (user) {
            // success;
            if (!user) {
                console.log(user);
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                console.log(user);
                console.log(user.email);
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log(user);
            return done(null, user);
        })
            .catch(function (error) {
            // error;
            return done(error);
        });
    }));
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        Sqlconnection_1.default.oneOrNone('SELECT * FROM users WHERE _id = $1', [id])
            .then(function (user) {
            // success;
            done(null, user);
        })
            .catch(function (error) {
            // error;
            return done(error);
        });
    });
}
exports.default = default_1;
;
//# sourceMappingURL=index.js.map