const init = () => { 
  createCarsAndTrucks();
}

const createCarsAndTrucks = () => { 
  let car = new CarClass("#id_row",{name:"susita",color:"white"})
  car.render();

  let truck = new TruckClass("#id_row",{name:"Volvo",color:"silver",kg:"10K"})
  truck.render();
  truck.renderKg();
  truck.divCar.style.color = "red";
}
init();