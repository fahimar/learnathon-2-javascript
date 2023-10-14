// asyncrhonous image loading with event and callback
const img = document.querySelector(".penguin");
img.src = "penguin.jpg";
img.addEventListener("load", function () {
  img.classList.add("fadeIn");
});
p.style.width = "300px";

const p = document.querySelector(".p");
setTimeout(function () {
  p.textContent = "My name is Fahim!";
}, 5000);
p.style.color = "red";
