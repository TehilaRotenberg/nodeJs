class Cake{
  constructor(_parent,_item){
    this.parent = _parent;
    this.name = _item.name;
    this.price = _item.price;
    this.cals = _item.cals;
  }

  // render(){
  //   let li = document.createElement("li");
  //   li.innerHTML = `
  //     ${this.name} - ${this.price} NIS
  //   `

  //   document.querySelector(this.parent).append(li);
  // }
}

// יתרון של הפרוטוייפ
// א. מאפשר לי לחלק את המחלקה למספר קבצים
Cake.prototype.render = function(){
  let li = document.createElement("li");
    li.innerHTML = `
      ${this.name} - ${this.price} NIS ---
    `

    document.querySelector(this.parent).append(li);
}