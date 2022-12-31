/** @format */

// selectors
list = document.querySelector(".header .links ul");
links = document.querySelectorAll(".header .links ul li a");
listELongChild = document.getElementById("elong");
icons = document.querySelector(".header .icons");

icons.onclick = function () {
  listELongChild.classList.toggle("full");
  list.classList.toggle("showList");
};
