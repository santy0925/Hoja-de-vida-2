alert("¡Bienbenido a mi Hoja de vida!");
document.getElementById("cambiarColor").addEventListener("click", function () {
  let bgColor = window.getComputedStyle(document.body).backgroundColor;
  document.body.style.backgroundColor =
    bgColor === "rgb(244, 244, 244)" ? "#333" : "#f4f4f4";
});

document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("confirmacion").style.display = "block";
  });
