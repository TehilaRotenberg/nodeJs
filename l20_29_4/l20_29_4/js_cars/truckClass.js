// extends = מייצג שהמחלקה תירוש ותרחיב את היכולת של קאר קלאס
class TruckClass extends CarClass {
  constructor(_parent,_item){
    //super - מזמן את הקונסטרקטור של המחלקה המקורית של הרכב
    super(_parent,_item);
    this.kg = _item.kg;
    
  }

  render(){
    // מזמן את הרנדר המקורי כי דרסנו אותו
    super.render();
    // this.renderKg();
  }

  renderKg(){
    this.divCar.innerHTML += `
      <div>Kg: ${this.kg}</div>
    `
  }
}

