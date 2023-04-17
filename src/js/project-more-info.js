// const showDetailsProject = document.querySelectorAll(".project-li");

// showDetailsProject.forEach(function (item) {
//   item.addEventListener("click", function () {
//     const itemAtualAtivo = document.querySelector(".active");

//     if (itemAtualAtivo) {
//       itemAtualAtivo.classList.remove("active");
//     }
//     item.classList.add("active");
//   });
// });

// const toggleArrow = document.querySelectorAll(".project-title");

// toggleArrow.forEach(function (item) {
//   item.addEventListener("click", () => {
//     const arrowActive = document.querySelector(".arrow-active");

//     if (arrowActive) {
//       arrowActive.classList.remove("arrow-active");
//     }
//     item.classList.add("arrow-active");
//   });
// });

const accordion = document.getElementById("accordion");

accordion.addEventListener("click", (e) => {
  if (e.target.classList.contains("more-info")) {
    e.target.parentElement.parentElement.classList.toggle("scale");
  }
});
