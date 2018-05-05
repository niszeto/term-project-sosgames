const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('../auth');
const { User } = require('../database');

router.get('/', (request, response, next) => {
  response.render('login', {
    title: 'UNO'
  });
});

// router.post('/', (request, response, next) => {
//   let formErrors = formValidation(request);

//   if (formErrors) {
//     renderErrors(response, formErrors);
//   } else {
//     const { username, password } = request.body;

//     User.login(username, password).then(result => {
//       if (result.id == undefined) {
//         renderErrors(response, result);
//       } else {
//         request.login(result.id, error => {
//           response.redirect('/lobby');
//         });
//       }
//     });
//   }
// });

router.post(
  '/',
  passport.authenticate('local', {
    failureFlash: 'Invalid username or password.',
    successRedirect: '/lobby',
    failureRedirect: '/login'
  }),
  (request, response, next) => {}
);

// Validate User
let formValidation = request => {
  request.checkBody('username', 'Username field cannot be empty.').notEmpty();
  request
    .checkBody('username', 'Username must be between 4-20 characters long.')
    .len(4, 20);
  request.checkBody('password', 'Password field cannot be empty.').notEmpty();
  request
    .checkBody('password', 'Password must be 8-100 characters long.')
    .len(8, 100);
  return request.validationErrors();
};

let renderErrors = (response, errors) => {
  response.render('login', {
    title: 'UNO',
    errors: errors
  });
};

// passport.serializeUser((user_id, done) => {
//   done(null, user_id);
// });

// // Retrieving data we want from user session
// passport.deserializeUser((user_id, done) => {
//   User.getUserDataById(user_id)
//     .then(user => {
//       done(null, user);
//     })
//     .catch(error => {
//       done(error);
//     });

//   // TODO: @robert implement getUserId in database/user.js
//   //   User.getUserId(username).then(user => {
//   //     done(null, user.id);
//   //   });
// });

module.exports = router;
