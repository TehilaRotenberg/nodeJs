// אימפורט של אקספורט דיפולט
// היתרון ניתן לשנות את השם של המחלקה/קומפנינטה ממה שהגודר בקובץ
import CountryModule from "./countryModule.js";
// אם עושים אימפורט לאקספורט רגיל אז צריך לשים סוגריים 
// מסולסלים, ובברירת מחדל לא ניתן לשנות את השם
// שניתן בקובץ
import {showName , json_ar } from "./exports.js"

const init = () => { 
  doApi();
  console.log(showName("yosi"))
  console.log(json_ar)
}

const doApi = () => { 
  let url = "https://restcountries.com/v3.1/all";
  $.get(url, (resp) => {
    // USA, Brazil , Germany, Israel , Italy
    console.log(resp)
    // רשימת המדינות שאנחנו רוצים שמופיעות במאפיין קאנטרי
    const wantedCountries_ar = ["USA","Brazil","Germany","Israel","Italy"];
    // resp -> מכיל את המערך של ה231 מדינות
    const countries_ar = resp.filter(item => {
      // בודק אם המאפיין קאנטרי של אותו אובייקט
      // קיים במערך של המדינות הנדרשות
      return wantedCountries_ar.includes(item.country)
    })
    // יכיל רק את ה5 המדינות המסוננות
    console.log(countries_ar);
    createList(countries_ar)
  })
}

const createList = (_ar) => { 
  _ar.forEach(item => {
    let country = new CountryModule("#id_row", item);
    country.render();
  })
}

init();