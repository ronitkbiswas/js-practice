function show() {
  document.getElementById("frame").style.maxHeight = "300px";
  let images = document.querySelectorAll("#frame img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = images[i].getAttribute("data-src");
  }
  document.getElementById("btn").style.display = "none";
}
function closeImg() {
  const closeBtn = document.createElement("button");
  closeBtn.textContent = " Reset ";
  closeBtn.style.fontSize = "13px";
  closeBtn.style.padding = "10px";
  closeBtn.style.backgroundColor = "red";
  closeBtn.style.color = "white";
  closeBtn.style.fontWeight = "bold";
  document.body.append(closeBtn);
  closeBtn.addEventListener("click", function () {
    location.reload();
  });
}
let next = 0;
function nextImg() {
  const nextBtn = document.createElement("button");
  nextBtn.textContent = " next >>  ";
  nextBtn.style.fontSize = "13px";
  nextBtn.style.padding = "10px";
  nextBtn.style.backgroundColor = "green";
  nextBtn.style.color = "white";
  nextBtn.style.fontWeight = "bold";
  document.body.append(nextBtn);
  nextBtn.addEventListener("click", function () {
    const img = document.querySelector("#frame img");
    next++;
    img.src = `https://picsum.photos/400/300?random=${next}`;
  });
}
function prevImg() {
  const prevBtn = document.createElement("button");
  prevBtn.textContent = " << previous ";
  prevBtn.style.fontSize = "13px";
  prevBtn.style.padding = "10px";
  prevBtn.style.backgroundColor = "green";
  prevBtn.style.color = "white";
  prevBtn.style.fontWeight = "bold";
  document.body.append(prevBtn);
  prevBtn.addEventListener("click", function () {
    const img = document.querySelector("#frame img");
    next--;
    img.src = `https://picsum.photos/400/300?random=${next}`;
  });
}
