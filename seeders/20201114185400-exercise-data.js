"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert(
         "Exercises",
         [
            {
               name: "Pull-Up",
               muscleGroup: "back",
               equipment: "gym",
            },
            {
               name: "One-Arm Dumbbell Row",
               muscleGroup: "back",
               equipment: "gym",
            },
            {
               name: "Seated Cable Row",
               muscleGroup: "back",
               equipment: "gym",
            },
            {
               name: "Straight Arm Pulldown",
               muscleGroup: "back",
               equipment: "gym",
            },
            {
               name: "Bent Over Row",
               muscleGroup: "back",
               equipment: "gym",
            },
            {
               name: "Wide Grip Lat Pulldown",
               muscleGroup: "back",
               equipment: "gym",
            },
            {
               name: "Rear Delt Pull",
               muscleGroup: "back",
               equipment: "gym",
            },
            {
               name: "Dumbell Shrug",
               muscleGroup: "back",
               equipment: "gym",
            },

            {
               name: "Dumbbell Flat Bench Press",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Triceps Dips",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Barbell Curl",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Incline Bench Dumbbell Fly",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Triceps Cable Pushdown",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Dumbbell Incline Bench Row",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Cable Rope Overhead",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Hammer Curls",
               muscleGroup: "arms",
               equipment: "gym",
            },
            {
               name: "Hammer Strength Machine Chest Press",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Incline Chest Press",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Pushups",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Seated Machine Fly",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Decline Dumbbell Press",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Dumbbell Pullover",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Chest Press",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Skull Crushers",
               muscleGroup: "chest",
               equipment: "gym",
            },
            {
               name: "Barbell Step-up",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Bulgarian Split Squat",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Barbell Lunge",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Barbell Deadlift",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Machine Squat Press",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Dumbbell Side Lunge",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Standing Dumbbell Calf Raise",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Lying Leg Curls",
               muscleGroup: "legs",
               equipment: "gym",
            },
            {
               name: "Hanging Raises",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Bench Leg Pull-In",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Ball Climbers",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Medicine Ball V-Ups",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Dumbbell Side Bend",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Hip Raise",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Weighted Twists",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Kneeling Cable Crunch",
               muscleGroup: "abs",
               equipment: "gym",
            },
            {
               name: "Exercise Bike",
               muscleGroup: "cardio",
               equipment: "gym",
            },
            {
               name: "Treadmill",
               muscleGroup: "cardio",
               equipment: "gym",
            },
            {
               name: "Elliptical",
               muscleGroup: "cardio",
               equipment: "gym",
            },
            {
               name: "Stairmaster",
               muscleGroup: "cardio",
               equipment: "gym",
            },
            {
               name: "Shoulder Stretch",
               muscleGroup: "back",
               equipment: "home",
            },
            {
               name: "Shoulder Rotations",
               muscleGroup: "back",
               equipment: "home",
            },
            {
               name: "Superman",
               muscleGroup: "back",
               equipment: "home",
            },
            {
               name: "Prone Reverse Fly",
               muscleGroup: "back",
               equipment: "home",
            },
            {
               name: "Back Extensions",
               muscleGroup: "back",
               equipment: "home",
            },
            {
               name: "Inchworms",
               muscleGroup: "back",
               equipment: "home",
            },
            {
               name: "Push Ups",
               muscleGroup: "back",
               equipment: "home",
            },
            {
               name: "Bird Dogs",
               muscleGroup: "back",
               equipment: "home",
            },

            {
               name: "Punches",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Triceps Dips",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Thigh Taps",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Arm Scissors",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Elbow Clicks",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Raised Arm Circles",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Arm Chops",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Shoulder Taps",
               muscleGroup: "arms",
               equipment: "home",
            },
            {
               name: "Diamond Pushup",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Dive Bombers",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Wide Push-up",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Chest Fly",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Decline Push Ups",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Static Push-up Hold",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Dynamic Clap Push-up",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Squat Thrusts",
               muscleGroup: "chest",
               equipment: "home",
            },
            {
               name: "Lying Side Leg Lift",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Lunge Step-Ups",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Bodyweight Walking Lunge",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Squat",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Front Kicks",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Plank Leg Lift",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Calf Raises",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Single Leg Glute Bridges",
               muscleGroup: "legs",
               equipment: "home",
            },
            {
               name: "Flutter Kick Squats",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Crunches",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Lunge Back Kick",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Sitting Twists",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Air Bike Crunches",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Pile Squat Calf Raise",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Plank Leg Raises",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Step Up Knee Raise",
               muscleGroup: "abs",
               equipment: "home",
            },
            {
               name: "Jumping Jacks",
               muscleGroup: "cardio",
               equipment: "home",
            },
            {
               name: "Burpees",
               muscleGroup: "cardio",
               equipment: "home",
            },
            {
               name: "Butt Kicks",
               muscleGroup: "cardio",
               equipment: "home",
            },
            {
               name: "Climbers",
               muscleGroup: "cardio",
               equipment: "home",
            },
            {
               name: "High Knees",
               muscleGroup: "cardio",
               equipment: "home",
            },
         ],
         {}
      );
   },

   down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete("Exercise", null, {});
   },
};
