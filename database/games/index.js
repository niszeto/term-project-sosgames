const create = require('./createGame').create;
const findById = require('./findGameById').findById;
const incrementRoundNumber = require('./incrementRoundNumber')
  .incrementRoundNumber;
const changeGameDirection = require('./changeGameDirection')
  .changeGameDirection;
const changeWinnerId = require('./changeWinnerId').changeWinnerId;
const findNumberOfGames = require('./findNumberOfGames').findNumberOfGames;

module.exports = {
  create,
  findById,
  incrementRoundNumber,
  changeGameDirection,
  changeWinnerId,
  findNumberOfGames
};
