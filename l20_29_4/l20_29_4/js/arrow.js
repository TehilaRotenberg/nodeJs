const init = () => {
  showAge3(30);
  showAge4(40);
  document.body.innerHTML += targil(3,5) + "<br>";
  showAge2(18)
  showAge(27)
}

// אם פונקציה מחזירה ערך ישר , ניתן לוותר על הסוגריים 
// והרטרן
const targil = (_x,_y) => _x * _y;

const targil2 = (_x,_y) => { 
 return _x * _y;
}

// רק אם יש פרמטר אחד ניתן לוותר על הסוגריים
const showAge4 = _age => {
  document.body.innerHTML += `Your age is: ${_age} <br>`;
}

const showAge3 = (_age) => {
  document.body.innerHTML += `Your age is: ${_age} <br>`;
}


const showAge2 = function(_age){
  document.body.innerHTML += `Your age is: ${_age} <br>`;
}

function showAge(_age){
  document.body.innerHTML += `Your age is: ${_age} <br>`;
}

init();