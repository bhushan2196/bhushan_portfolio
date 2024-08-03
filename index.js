const loadder = document.querySelector(".loadder");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

setTimeout(() => {
  loadder.style.display = "none";
}, 1900);

close.addEventListener("click", function (e) {
  burger.style.width = "0%";
});
menu.addEventListener("click", function (e) {
  burger.style.width = "100%";
  
});
