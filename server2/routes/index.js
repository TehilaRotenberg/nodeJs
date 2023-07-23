
const axios=require("axios");
const { log, error } = require("console");
const express=require("express");
require("axios")
const fs=require("fs/promises");
require("dotenv").config()


const router = express.Router();

router.get("/" , async (req,res)=> {
  try{
     setInterval(scanDirectory,10000)
    res.json({msg:"the server run in localhost 3000 !"})
  }catch{
    res.json({msg:"error"})

  }
   
  })

const scanDirectory=async ()=>{
  try {
  const dirPath=process.env.PATH_DIR;
  let files=await fs.readdir(dirPath, { withFileTypes: true })
  const onlyFiles = files.filter(de =>( !de.isDirectory() && !checkFilecopied(de.name) && !cheackNumFailures(de.name))).map(de => de.name); 

  await Promise.all( onlyFiles.forEach(async element=>{
    console.log(element);
    let flage=true;
    let path= `${dirPath}/${element}` 
    let newFilename=isFileNameDigitEnds(element)?element.slice(0,element.lastIndexOf(".")):element;
    let newPath=`${dirPath}/${newFilename}.copies`;
   console.log(cheackNumFailures(element)); 
    try {
      let file= await fs.readFile(path,{encoding:'utf-8'})
      let resp= await axios.post(`${process.env.URL}/${newFilename}`,{text:file}) 
    } catch (error) {
      await rename(path,`${dirPath}/${addNumOffailures(element)}`)
      flage=false
      throw console.error();
    }
    if(flage){await rename(path,newPath)}
   
  }))

  return("the scan is success")

} catch (error) {
    return error
  }
}

const checkFilecopied=(fileName)=>{
  // console.log(fileName.includes(".copies"));
return fileName.includes(".copies")
}

const addNumOffailures=(fileName)=>{
 fileName=fileName.split(".");
if (isFileNameDigitEnds(fileName)) {
   
    let num=Number(fileName[fileName.length-1]);
    num++
    fileName[fileName.length-1]=num;
    
}else{

fileName[fileName.length-1]=`${fileName[fileName.length-1]}.1`

}
return fileName.join().replaceAll(",","."); 
}

const isDigit=(str)=>{
  return /\d/.test(str)
}

const isFileNameDigitEnds=(fileName)=>{
  return fileName.length>1 && isDigit(fileName[fileName.length-1])
}

const cheackNumFailures=(fileName)=>{
  fileName=fileName.split(".");
 
  if (isFileNameDigitEnds(fileName)) {
    let num=fileName[fileName.length-1];
    console.log(process.env.MAX_ATTEMPT<Number(num));
    return process.env.MAX_ATTEMPT<Number(fileName[fileName.length-1])
  }else{
   return false;
  }
}
const rename=async (oldPath,newPath)=>{
await fs.rename(oldPath,newPath,(error)=>{
  console.log("aaa");
    if (error) {
      console.log(error);
    }
  })
}


  module.exports = router;