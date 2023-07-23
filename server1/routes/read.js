const express= require("express");
const router = express.Router();
const {readFileContaint}=require("./javaScript.js");
 
let arr=[]

router.get("/" , (req,res)=> {
    res.json({msg:"Rest api work666 !"})
  })

  router.post("/readMultipleFiles",async (req,res)=>{
  let body_array= req.body.array;

  
  for (let index = 0; index < body_array.length; index++) {
    arr[index]=await readFileContaint(body_array[index]);
  }
    res.send({array:arr})
  })


  router.get("/:filePath([\\w \\W]+)", async (req,res)=>{
    // console.log(req.params['filePath']);
     let text=await readFileContaint(req.params['filePath'])
     res.json({msg:text})
  })

  module.exports = router;