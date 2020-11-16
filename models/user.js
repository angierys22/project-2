module.exports = function (sequlize, DataTypes) {
   const User = sequlize.define("User", {
      firstName: {
         type: DataTypes.STRING,
         allowNull: false,

      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false,

      },
      eMail: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true,
         },
      }
   },
   {timestamps: false}
   );
   return User;
};