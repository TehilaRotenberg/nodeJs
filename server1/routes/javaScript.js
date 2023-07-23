const fs = require("fs/promises");
const fs2 = require("fs");
// 1
const isNumbersEven1=(num1,num2)=>{
    return (num1%2==0 && num2%2==0);
}
// 2
const isNumbersEven2=(num1,num2)=>{
    return (num1%2==0 && num2%2==0);
}
// 3
exports.readFileContaint=async (path)=>{
   return await fs.readFile(path,{encoding:'utf-8'})
}
exports.writeFile=async (path,data)=>{
     
  fs2.exists(path, await async function (doesExist) {
        if (doesExist) {
           return'file exists';
        } else { 
            try{
                 await fs.writeFile(path,data) 
                 return 'file writing'
            }catch(error){
               throw error
            }
           
           
        }
    });
}

const init=async ()=>{
console.log(await readFileContaint("C:/Users/Tehila/Documents/nodeJs/doc.txt"));
}

// init()
