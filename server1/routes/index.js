const express= require("express");
const router = express.Router();
const {writeFile}=require("./javaScript.js")
require("dotenv").config()
router.get("/" , (req,res)=> {
  res.json({msg:"Rest api work666 !"})
})

router.post("/write/:pathFile([\\w \\W]+)",async (req,res)=>{
 let massege= await writeFile(`${process.env.PATH_FILE}/${req.params["pathFile"]}`,req.body.text)
 res.json({msg:massege})
})

module.exports = router;