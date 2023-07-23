const prods_ar = [
  {name:"bamba",price:30,id:1},
  {name:"besli",price:10,id:2},
  {name:"Cola",price:8,id:3},
]


let expinsive_ar = []
const init = () => { 
  // expinsive_ar = prods_ar.filter((item) => {return item.price >= 10});
  // בפונקציית חץ אם יש רטרן אחד אין צורך בסוגריים מסולסלות 
  // ואם יש פרמטר אחד אין צורך בסוגריים ריגלות איפה שהאייטם
  expinsive_ar = prods_ar.filter(item => item.price >= 10);

  console.log(expinsive_ar);
}


init();