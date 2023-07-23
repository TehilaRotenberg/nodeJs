const indexR=require("./index")

exports.routsInit=(app)=>{
    app.get("/",indexR)
}