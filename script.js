function show() {
  document.getElementById("id1").style.maxHeight = "200px";
  var images = document.querySelectorAll("#id1 img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
}
function reload() {
  const reloadBtn = document.createElement("button");
  reloadBtn.textContent = "X";
  document.body.append(reloadBtn);
  reloadBtn.addEventListener("click", function () {
    location.reload();
  });
}
