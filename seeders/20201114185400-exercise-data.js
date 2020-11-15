"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert("Exercise",[
         {
            name: "Pull-Up",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Pull-Up",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Pull-Up",
            muscleGroup: "Back",
            equipment: "gym"
         }
    
      ],{});
   
   },

   down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete("Exercise", null, {});
    
   }
};
