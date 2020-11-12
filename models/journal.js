module.exports = function (sequelize, DataTypes) {
   const Journal = sequelize.define("Journal", {
      createdAt: {
         type: DataTypes.DATE,
         allowNull: false,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,

      },
      body: {
         type: DataTypes.TEXT,
         allowNull: false,

      }

   });

   Journal.associate = function (models) {
      Journal.belongsTo(models.User, {
         foreignKey: {
            allowNull: false,
         }
      });
   };
   return Journal;
};