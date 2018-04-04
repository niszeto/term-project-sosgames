'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserGameSession = sequelize.define('UserGameSession', {
    user_id: DataTypes.INTEGER,
    game_session_id: DataTypes.INTEGER,
    current_score: DataTypes.INTEGER,
    winner: DataTypes.BOOLEAN
  }, {});
  UserGameSession.associate = function(models) {
    // associations can be defined here
  };
  return UserGameSession;
};