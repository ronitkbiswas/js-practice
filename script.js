function show() {
  document.getElementById("id1").style.maxHeight = "300px";
  let images = document.querySelectorAll("#id1 img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
}
function closeImg() {
  const closeBtn = document.createElement("button");
  closeBtn.textContent = " Reset ";
  document.body.append(closeBtn);
  closeBtn.addEventListener("click", function () {
    location.reload();
  });
}
let next = 0;
function nextImg() {
  const nextBtn = document.createElement("button");
  nextBtn.textContent = " next >>  ";
  document.body.append(nextBtn);
  nextBtn.addEventListener("click", function () {
    const img = document.querySelector("#id1 img");
    next++;
    img.src = `https://picsum.photos/400/300?random=${next}`;
  });
}
function prevImg() {
  const prevBtn = document.createElement("button");
  prevBtn.textContent = " << previous ";
  document.body.append(prevBtn);
  prevBtn.addEventListener("click", function () {
    const img = document.querySelector("#id1 img");
    next--;
    img.src = `https://picsum.photos/400/300?random=${next}`;
  });
}
