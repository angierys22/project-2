# HyFit

---

## Description

---

An exercise selection and tracking app

## Table of Contents

-  [Install](#install)
-  [Usage](#usage)
-  [Tests](#tests)
-  [Questions](#questions)
-  [Contributing](#contributing)
-  [License](#license)

## Usage

---

### Database setup

Seeders are setup for application usage inside `seeder/`. The database must be seeded for use locally or when deployed to Heroku.

---

#### Local development

1. Create a `.env` file with the password per the `example.env` file.
1. Install the prerequisites.
   ```
   npm install
   ```
1. Create the database
   ```
   npx sequelize db:create
   ```
1. Seed the database
   ```
   npx sequelize db:seed:all
   ```
   The application is read to be run.

---

#### Heroku deployment

1. Deploy the application to Heroku and add a JawsDB database.
1. Run a shell on the in the deployed Heroku app
   ```
   heroku run bash
   ```
1. Seed the database
   ```
   npx sequelize db:seed:all
   ```
   The data should now be available to the application
