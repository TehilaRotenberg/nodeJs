let car = {
  name:"mazda",
  color:"blue",
  km:40000,
  year:2022,
}

let cake = {
  name:"chocolae cake",
  price:100,
  cals:1000
}

let ar = ["apple","banana","kiwi"];


const init = () => {
  createCar();
  destructionArray();
  addCake(cake)
}



const createCar = () => {
  // let color = car.color;
  // let name = car.name;
  // let year  =car.year
//  מפרק בתוך הסקופ של הפונקציה את המאפיינים של האובייקט למשתנים
// destruction - פירוק המאפיינים של אובייקט למשתנים
// לא חובה לקחת את כל המאפיינים , רק מה שאני צריך למשל את הקמ לא לקחנו
  let {color,name,year} = car;

  document.body.innerHTML += `
    <h2 style="color:${color};">${name} ${year} --</h2>
  `
  // document.body.innerHTML += `
  //   <h2 style="color:${car.color};">${car.name} ${car.year}</h2>
  // `
} 

// דיסטרקשן של פרמטר
const addCake = ({name,price}) => {
  document.body.innerHTML += `
    <h3>${name} - ${price}</h3>
  `
}

const destructionArray = () => { 
  // דיסטרקשן למערך
  // בשונה מאובייקט חובה לקחת את כל התאים עד התא המבוקש
  // נניח אם אני ירצה את תא מספר 2 אני יצטרך לפני לקחת את 0 ו 1
  let [a,b,c] = ar;
  console.log(c); // banana
}


init();