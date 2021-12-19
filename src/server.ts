import * as express from "express";
const routes = require("./controllers");
// import sequelize connection
const sequelizeConn = require("./config/connection.js");

const app: express.Application = express.default();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelizeConn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
