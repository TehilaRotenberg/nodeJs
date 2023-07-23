const indexR = require("./index");
const usersR = require("./users");
const prodsR = require("./prods");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/prods",prodsR)
}