import * as express from "express";
const routes = require("./routes");

const app: express.Application = express.default();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

// Register routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
