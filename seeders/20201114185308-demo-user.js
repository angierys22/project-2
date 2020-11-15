"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert("User", [{
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
