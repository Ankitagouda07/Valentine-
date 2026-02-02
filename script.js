function yes(){
  alert("I love you so much ❤️");

  for(let i=0;i<35;i++){
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random()*100 + "%";
    h.style.animationDuration = 2 + Math.random()*3 + "s";
    document.body.appendChild(h);
  }
}
