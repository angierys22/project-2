"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert("Exercises",[
         {
            name: "Pull-Up",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "One-Arm Dumbbell Row",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Seated Cable Row",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Straight Arm Pulldown",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Bent Over Row",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Wide Grip Lat Pulldown",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Rear Delt Pull",
            muscleGroup: "Back",
            equipment: "gym"
         },
         {
            name: "Dumbell Shrug",
            muscleGroup: "Back",
            equipment: "gym"
         }
    
      ],{});
   
   },

   down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete("Exercise", null, {});
    
   }
};
