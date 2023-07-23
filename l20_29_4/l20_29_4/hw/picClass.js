class PicClass{
  constructor(_parent,_item){
    this.parent = _parent;
    this.tags = _item.tags;
    this.likes = _item.likes;
    this.views = _item.views;
    this.small_pic = _item.previewURL;
    this.link = _item.pageURL
  }

  render(){
    let div = document.createElement("div");
    div.className = "col-md-4 border p-2";
    document.querySelector(this.parent).append(div);
    div.innerHTML += `
    <img src="${this.small_pic}" alt="${this.tags}" class="w-25 float-start me-2">
    <h2>Tags: ${this.tags}</h2>
    <div>Views: ${this.views}</div>
    <div>Likes: ${this.likes}</div>
    <a href="${this.link}" target="_blank">More info</a>
    `
  }
}