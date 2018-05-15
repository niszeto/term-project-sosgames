const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../database/users');

passport.serializeUser((user_id, done) => {
  done(null, user_id);
});

passport.deserializeUser((user_id, done) => {
  User.getUserDataById(user_id)
    .then(user => {
      done(null, user);
    })
    .catch(error => {
      done(error);
    });
});

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true
    },
    (request, username, password, done) => {
      User.getUserData(username).then(user => {
        if (!user) {
          //DEBUG ADDED
          console.log('Invalid username case in LocalStrategy');
          return done(null, false, { message: 'Invalid Username.' });
        }
        bcrypt.compare(password, user.password).then(result => {
          if (result) {
            //DEBUG ADDED
            console.log('Valid user case in LocalStrategy');
            return done(null, user.id);
          } else {
            // DEBUG ADDED
            console.log('Invalid password case in LocalStrategy');
            return done(null, false, { message: 'Invalid Password.' });
          }
        });
      });
    }
  )
);

module.exports = passport;
