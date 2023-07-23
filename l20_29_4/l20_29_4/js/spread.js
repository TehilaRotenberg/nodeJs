let def_ar = ["d","e","f"];
let abc_ar = ["a","b","c",...def_ar];

console.log(abc_ar);
// כדי להגיע לתא של מערך בתוך מערך
// console.log(abc_ar[3][1]); 

let car1 = {name:"tesla",color:"white"};
let car2 = {...car1,color:"black",year:2022};

console.log(car2);