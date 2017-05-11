module.exports = function(sequelize, DataTypes) {
  //create sequelize model here- currently just example, not being used
  var User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }, 
    some_other_data: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
  return User;
};
