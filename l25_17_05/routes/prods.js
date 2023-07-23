const express= require("express");
const {prods_ar} = require("../data/prodsJson")

const router = express.Router();

router.get("/" , (req,res)=> {

  res.json(prods_ar)
})

// לפי פארמס נציג מוצרים של קטגוריה מסויימת
router.get("/categories/:catName", (req,res) => {
  // req.params.catName -> מכיל את הפראמס
  let catName = req.params.catName;
  // http://localhost:3002/prods/categories/animals
  let temp_ar = prods_ar.filter(item => item.cat == catName)
  res.json(temp_ar);

  // res.json({msg:"prods cats work",cat:req.params.catName})

})

// נבצע חיפוש עם פילטר בשם 
//?s=
// http://localhost:3000/prods/search/?s=milk
router.get("/search",(req,res) => {
  let queryS = req.query.s.toLowerCase();
  // let temp_ar = prods_ar.filter(item => item.name.includes(queryS));
  // toLowerCase() -> מבטל את הקייס סינסטיב
  let temp_ar = prods_ar.filter(item => item.name.toLowerCase().includes(queryS));
  res.json(temp_ar);
})

// לפי מינומום ומקסימום כקוארי סטרינג שיציג מוצרים
// ?min=
router.get("/prices",(req,res) => {
  // מגדיר שהמנימום הוא מהקוארי ואם לא מוצא יהיה 0
  let min = req.query.min || 0;
  // מגדיר שהמקס הוא מהקוארי ואם לא מוצא הוא יהיה אין סופי
  let max = req.query.max || Infinity;
  // Number() -> casting-> מכריח/מלהק את המשתנה להיות מספר
  // let temp_ar = prods_ar.filter(item => Number(item.price) >= min)
  let temp_ar = prods_ar.filter(item => { 
    let price= Number(item.price)
    // http://localhost:3000/prods/prices/?min=5&max=500
    return (price >= min && price <= max)
  })
  res.json(temp_ar)
})


module.exports = router;

