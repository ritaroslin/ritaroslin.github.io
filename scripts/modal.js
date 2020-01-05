function onClick(element) {
  if(window.innerHeight < window.innerWidth){
    document.getElementById("modal-img").src = element.src;
    document.getElementById("modal-module").style.display = "block";
  }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
          document.getElementById("modal-module").style.display = "none";
    }
};
