module.exports = function (sequelize, DataTypes) {
   const Exercise = sequelize.define("Exercise", {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      muscleGroup: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      equipment: {
         type: DataTypes.STRING,

      }
   });
   return Exercise;
};