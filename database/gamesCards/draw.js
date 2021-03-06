const database = require('../connection');

const getCardInDeck = require('./getCardInDeck');
const changeInDeck = require('./changeInDeck');
const changeInHand = require('./changeInHand');
const changeOnTop = require('./changeOnTop');
const changeUserId = require('./changeUserId');
const findCardById = require('./findCardById');

const incrementNumberOfCardsById = require('../usersGames/incrementNumberOfCardsById');

const draw = (gameId, userId, numberOfCardsToDraw = 1) => {
  return incrementNumberOfCardsById(userId, gameId, numberOfCardsToDraw).then(
    () => {
      return getCardInDeck(gameId, numberOfCardsToDraw).then(cards => {
        return database.task(databaseTask => {
          let queries = [];
          cards.forEach(card => {
            queries.push(
              Promise.all([
                changeInDeck(false, gameId, card.card_id),
                changeInHand(true, gameId, card.card_id),
                changeOnTop(false, gameId, card.card_id),
                changeUserId(userId, gameId, card.card_id)
              ]).then(() => {
                return findCardById(card.card_id, gameId);
              })
            );
          });
          return databaseTask.batch(queries);
        });
      });
    }
  );
};

module.exports = draw;
