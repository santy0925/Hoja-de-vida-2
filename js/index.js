document.getElementById("cambiarColor").addEventListener("click", function () {
  let bgColor = window.getComputedStyle(document.body).backgroundColor;
  document.body.style.backgroundColor =
    bgColor === "rgb(244, 244, 244)" ? "#333" : "#f4f4f4";
});
