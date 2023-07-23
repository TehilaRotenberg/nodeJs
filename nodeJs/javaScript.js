const fs = require("fs/promises");
// 1
const isNumbersEven1=(num1,num2)=>{
    return (num1%2==0 && num2%2==0);
}
// 2
const isNumbersEven2=(num1,num2)=>{
    return (num1%2==0 && num2%2==0);
}
// 3
const readFileContaint=async (path)=>{
   return await fs.readFile(path,{encoding:'utf-8'})
}

const init=async ()=>{
console.log(await readFileContaint("C:/Users/Tehila/Documents/nodeJs/doc.txt"));
}

init()