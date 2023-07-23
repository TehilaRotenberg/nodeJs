class CarClass{
  constructor(_parent,_item){
    this.parent = _parent;
    this.name = _item.name;
    this.color = _item.color;
  }

  render(){
    let div = document.createElement('div');
    // מאפשר לי לדבר עם מאפיין דיב מכל מקום במחלקה
    this.divCar = div;
    div.className = "col-md-6 border";
    document.querySelector(this.parent).append(div);
    div.innerHTML += `
      <h2>${this.name}</h2>
      <div>Color: ${this.color}</div>

    `
  }
}