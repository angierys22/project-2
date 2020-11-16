"use strict";

require("dotenv").config();

// let sequelize;
module.exports = {
   up: async (queryInterface, Sequelize) => {
     console.log(Sequelize);
      return await queryInterface.bulkInsert("Users", [{
         firstName: "John",
         lastName: "Doe",
         eMail: "John.Doe@example.com",

      },{
         firstName: "Jane",
         lastName: "Doe",
         eMail: "Jane.Doe@example.com",

      },{
         firstName: "Bob",
         lastName: "Dobalina",
         eMail: "Mistadobalina@example.com",

      },
      ], {});
   },

   down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete("User",null,{});
    
   }
};
