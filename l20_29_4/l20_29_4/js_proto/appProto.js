const init = () => {
  createCakes();

  let dt = new Date();
  // gt.getDay()
  console.log(dt.hebDay());
}

const createCakes = () => {
  let cake = new Cake("#id_ul",{name:"orange cake",price:30,cals:1000})
  cake.render();
}



Date.prototype.hebDay = function(){
  let days_ar = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת"
  ]
  // this.getDay() -> מחזיר את היום מ0 עד 6
  return days_ar[this.getDay()];
}

init()