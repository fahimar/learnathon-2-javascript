// asyncrhonous image loading with event and callback
const img = document.querySelector(".penguin");
img.src = "penguin.jpg";
img.addEventListener("load", function () {
  img.classList.add("fadeIn");
});
p.style.width = "300px";
