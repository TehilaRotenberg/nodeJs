class CountryClass{
  constructor(_parent,_item){
    this.parent = _parent;
    this.total = _item.totalTests.toLocaleString();
    this.testPerMillion = _item.testsPerOneMillion.toLocaleString();
    this.country = _item.country;
    this.active = _item.active.toLocaleString();
  }

  render(){
    let div = document.createElement("div");
    div.className = "col-md-4 border p-2";
    document.querySelector(this.parent).append(div);

    div.innerHTML = `
    <h2>${this.country}</h2>
    <div>Total tests: ${this.total}</div>
    <div>Tests per one million:${this.testPerMillion}</div>
    <button class="my-btn">Current active</button>
    `

    let btn = div.querySelector(".my-btn");
    btn.addEventListener("click",() => {
      alert(this.active) 
    })
  }
}