const express = require("express");
const compression = require("compression");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const db = require("./models");
const seed = require("./utils/seed");
const errorHandler = require("./utils/errorHandler");

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

const exphbs = require("express-handlebars");

app.engine(
   "handlebars",
   exphbs({
      defaultLayout: "main",
      // partialsDir: __dirname + "/views/partials/"
   })
);
app.set("view engine", "handlebars");

// var routes = require("./controllers/burgersController.js");

app.use("/api", apiRoutes);
app.use(htmlRoutes);

// error handling
app.use(errorHandler);

//no database version
// app.listen(PORT, () => {
//    console.log("Web server started on http://localhost:%s", PORT);
// });

// reserved for database connection 

// drops all tables on eevery restart
db.sequelize.sync({ force: true }).then(async () => {
   // // seed db
   // await seed(db.User);
   // await seed(db.Exercise);
   // await seed(db.Journal);

   app.listen(PORT, () => {
      console.log("Web server started on http://localhost:%s", PORT);
   });
});
