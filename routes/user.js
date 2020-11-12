module.exports = function (sequalize,DataTypes){
   const User = sequalize.define("user",{
      first_name: {
         type: DataTypes.STRING,
         allowNull: false, 
      },
      last_name: {
         type: DataTypes.STRING,
         allowNull: false,
        
      },

   });
   return User;
};