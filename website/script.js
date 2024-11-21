document
  .querySelector(".header__mobile-closeBtn")
  .addEventListener("click", () => {
    document.querySelector(".header__mobile").style.display = "none";
  });
document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".header__mobile").style.display = "block";
});
document.querySelector(".popup__closeBtn").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});
document.querySelector(".cookies__closeBtn").addEventListener("click", () => {
  document.querySelector(".cookies").style.display = "none";
});
document.querySelector(".cookies__accept").addEventListener("click", () => {
  document.querySelector(".cookies").style.display = "none";
});
document.querySelector(".cookies__decline").addEventListener("click", () => {
  document.querySelector(".cookies").style.display = "none";
});
document.querySelector(".success__closeBtn").addEventListener("click", () => {
  document.querySelector(".success").style.display = "none";
});
document.querySelector(".success__button").addEventListener("click", () => {
  document.querySelector(".success").style.display = "none";
});

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const successPopup = document.querySelector(".success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    popup.style.display = "none";
    successPopup.style.display = "block";
  } else {
    alert("Пожалуйста, заполните все поля корректно.");
  }
});
