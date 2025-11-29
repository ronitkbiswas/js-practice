// const random_id = Math.trunc(Math.random() * 12 + 1);
// const btn = document.createElement("button");
// const p = document.createElement("p");

// btn.textContent = "Generate Instantly";
// btn.addEventListener("click", function () {
//   location.reload();
// });

// const names = [
//   "sujoy",
//   "mihir",
//   "jhuma",
//   "supratik",
//   "ritu",
//   "unnati",
//   "reshma",
//   "suparna",
//   "bappa",
//   "santosh",
//   "santu",
//   "kanika",
//   "masi",
// ];

// document.body.append(
//   "random_id: " + random_id,
//   document.createElement("br"),
//   "picked names: " + names[random_id],
//   document.createElement("br"),
//   document.createElement("br"),
//   btn
// );

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
