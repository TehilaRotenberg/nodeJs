const express=require("express");
const {routsInit}=require("./routes/config_routes")
const path = require("path");
const http = require("http");

const app = express();
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());


routsInit(app)
const server=http.createServer(app)
let port = process.env.PORT ||3001
server.listen(port);
