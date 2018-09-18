var passport = require("passport");
import {Strategy as LocalStrategy} from 'passport-local';
import client from '../../Sqlconnection';

    
export default function() {

   
passport.use(new LocalStrategy({usernameField:'email'},
function (email, password, done) {
 
client.query(`SELECT * FROM USERS WHERE email=${email}`, function (err, user) {
    if (err) { return done(err); }
    if (!user) {
        client.end();
        return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.rows[0].password !=password){
        client.end();
        return done(null, false, { message: 'Incorrect password.' });
    }
    client.end()
    return done(null, user.rows[0]);
    
})

}));

passport.serializeUser(function (user, done) {
   done(null, user._id);
});

passport.deserializeUser(function (id, done) {

    client.query(`SELECT * FROM USERS WHERE _id=${id}`, function (err, user) {
        done(err, user.rows[0]);
        client.end();
    });

})};