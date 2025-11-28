const random_id = Math.trunc(Math.random() * 12 + 1);

const btn = document.createElement("button");
const p = document.createElement("p");

btn.textContent = "Generate";

btn.addEventListener("click", function () {
  location.reload();
});

const names = [
  "sujoy",
  "mihir",
  "jhuma",
  "supratik",
  "ritu",
  "unnati",
  "reshma",
  "suparna",
  "bappa",
  "santosh",
  "santu",
  "kanika",
  "masi",
];

document.body.append(
  "random_id: " + random_id,
  document.createElement("br"),
  "picked names: " + names[random_id],
  document.createElement("br"),
  document.createElement("br"),
  btn
);
