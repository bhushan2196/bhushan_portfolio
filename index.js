const main = document.querySelector(".main");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

// setTimeout(() => {
//   main.style.classlist.add("show");
// }, 5000);
// console.log(main.classLists);

close.addEventListener("click", function (e) {
  burger.style.width = "0%";
});
menu.addEventListener("click", function (e) {
  burger.style.width = "90%";
});
