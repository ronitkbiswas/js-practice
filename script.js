function show() {
  document.getElementById("id1").style.maxHeight = "300px";
  let images = document.querySelectorAll("#id1 img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
}
function closeImg() {
  const reloadBtn = document.createElement("button");
  reloadBtn.textContent = "X";
  document.body.append(reloadBtn);
  reloadBtn.addEventListener("click", function () {
    location.reload();
  });
}
let next = 0;
function nextImg() {
  const nextBtn = document.createElement("button");
  nextBtn.textContent = " >> ";
  document.body.append(nextBtn);
  nextBtn.addEventListener("click", function () {
    const img = document.querySelector("#id1 img");
    next++;
    img.src = `https://picsum.photos/400/300?random=${next}`;
  });
}
