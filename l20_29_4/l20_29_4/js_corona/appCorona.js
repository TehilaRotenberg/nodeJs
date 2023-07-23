const init = () => { 
  doApi();
}

const doApi = () => { 
  let url = "https://coronavirus-19-api.herokuapp.com/countries";
  $.get(url, function(resp){
    // USA, Brazil , Germany, Israel , Italy
    // console.log(resp);
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
    let country = new CountryClass("#id_row", item);
    country.render();
  })
}

init();