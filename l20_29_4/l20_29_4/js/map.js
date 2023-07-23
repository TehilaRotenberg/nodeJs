const users_ar = [
  {first:"koko",last:"akof",id:1},
  {first:"roberto",last:"bajio",id:2},
  {first:"jack",last:"black",id:3},
];

let names_ar = []
const init = () => {
  names_ar = users_ar.map((item) => {
    return `${item.first} ${item.last}`
  })

  // names_ar = [];
  // users_ar.forEach((item) => {
  //   names_ar.push(`${item.first} ${item.last}`)
  // })

  console.log(names_ar);
}


init();