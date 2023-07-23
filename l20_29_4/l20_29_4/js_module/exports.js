// export - מייצא
// וניתן לזמן את הפקודה בשונה מאיקספורט דיפולט
// כמה פעמים שנרצה
export const json_ar = [
  {name:"user",age:40},
  {name:"koko",age:44},
]



export const showName = (_name) => {
  return "welcome " + _name;
}


export const showAge = (_age) => {
  return getBirthYear(_age);
}

const getBirthYear = (_age) => {
  return 2022 - _age
}