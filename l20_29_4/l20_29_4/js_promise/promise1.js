let isClean = true;

const init = () => { 
  // promise - מלשון הבטחה
  // then - יעבוד כאשר ריסולב מזומן
  // catch - יעבוד כאשר הריג'קט פועל / שבדרך כלל מייצג טעות כלשהי
  cleanRoomPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

  cleanRoomAndGarden(true,true)
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
}

const cleanRoomAndGarden = (_cleanRoom,_cleanGarden) => {
  return new Promise((resolve,reject) => {
    if(_cleanRoom && _cleanGarden){
      resolve("Go play PS5!")
    }
    else if(_cleanRoom || _cleanGarden){
      reject("You need to clean the room or the garden!!!!")
    }
    else{
      reject("You need to clean the all building!!!!");
    }
  })
}

// הגדרת פרומיס,בדרך כלל יוחזר מפונקציה
const cleanRoomPromise = new Promise((resolve,reject) => {
  if(isClean){
    resolve("Go play ps5/Xbox one");
  }
  else{
    reject("Go to clean the garden !!!");
  }
})



init();