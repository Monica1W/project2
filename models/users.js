module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6,20]
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return User;
};
