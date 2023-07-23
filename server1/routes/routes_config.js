const indexR = require("./index");
const readR = require("./read");

exports.routsInit=(app)=>{
    app.use("/",indexR)
    app.use("/read",readR)
}

