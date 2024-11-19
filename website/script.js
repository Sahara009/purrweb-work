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
