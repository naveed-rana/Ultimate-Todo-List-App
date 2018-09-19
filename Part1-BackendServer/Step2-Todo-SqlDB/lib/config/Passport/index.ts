var passport = require("passport");
import {Strategy as LocalStrategy} from 'passport-local';
import db from '../../Sqlconnection'
    
export default function() {

   
passport.use(new LocalStrategy({usernameField:'email'},
function (email, password, done) {

    db.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
  .then(function(user) {
    
      // success;
      if(!user){
        console.log(user);
        return done(null, false, { message: 'Incorrect username.' } )
      }
      
      if(user.password != password){
        console.log(user);
        console.log(user.email);
        return done(null, false, { message: 'Incorrect password.' } )
      }
      console.log(user);
      return done(null,user);
  })
  .catch(function(error) {
      // error;
      return done(error);
  });

}
));

passport.serializeUser(function (user, done) {
   done(null, user._id);
});

passport.deserializeUser(function (id, done) {

    db.oneOrNone('SELECT * FROM users WHERE _id = $1', [id])
    .then(function(user) {
        // success;
        done(null,user);
    })
    .catch(function(error) {
        // error;
        return done(error);
    });

});


};