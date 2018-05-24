# term-project-sosgames

term-project-sosgames created by GitHub Classroom

# UNO! by SOSGames

Robert Quiñones, Khanh Nguyen, Nicholas Szeto, Jonathan Dombrowski
 
 
## Introduction

The purpose of this project was to build a multiplayer, online game that supports an arbitrary number of simultaneous games with persisting data and authentication, and host it on the web. The end result allows users to log in, log out, create and join an arbitrary number of games, with the game state being updated in real-time. The user can also participate in sending messages in a chat room either in the lobby or in the individual game rooms. 

No sample code was given, only the main topics were discussed in class. This project was the product of blood, sweat, tears and coffee from March 1st to May 22nd 2018. 

## How to run

### Prerequisites: 
- PostgreSQL, Node installed
- In Postgres, create a database titled `uno`

### Command Line Instructions

`npm install`

`npm run db:migrate`

### Create .env file with following:

    touch .env
    echo DATABASE_URL=postgres://`whoami`@localhost:5432/DATABASE_NAME >> .env

`npm run db:seed 20180418050030-cards.js`

`npm run start:dev`

The app should then be running locally, and can be accessed at 

`localhost:3000`

## Heroku App Link
[SOS Games Uno](https://sos-games-uno.herokuapp.com/)
