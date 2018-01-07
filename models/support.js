'use strict';
module.exports = (sequelize, DataTypes) => {
  var support = sequelize.define('support', {
    support_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    prefecture_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return support;
};