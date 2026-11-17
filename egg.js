(function(){
  var code = "aezakmi", buf = "", t;
  var toast = document.createElement("div");
  toast.className = "toast";
  document.body.appendChild(toast);
  function show(msg){
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(t);
    t = setTimeout(function(){ toast.classList.remove("show"); }, 2200);
  }
  document.addEventListener("keydown", function(e){
    if (!e.key || e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-code.length);
    if (buf === code){
      buf = "";
      var on = document.body.classList.toggle("ghost");
      show(on ? "cheat activated — ghost mode on" : "ghost mode off");
    }
  });
  var y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
})();
