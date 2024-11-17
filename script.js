let intervalId;
// ссылки на элементы
const hrElement = document.getElementById("hr");
const mnElement = document.getElementById("mn");
const scElement = document.getElementById("sc");

function updateClock() {
  //получаем текущее время ( часы, минуты, секунды )
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // расчет углов поворота
  const hrDeg = 30 * (hours % 12) + 0.5 * minutes;
  const mnDeg = 6 * minutes + 0.1 * seconds;
  const scDeg = 6 * seconds;

  // использование в качестве стилей
  hrElement.style.transform = `rotate(${hrDeg}deg)`;
  mnElement.style.transform = `rotate(${mnDeg}deg)`;
  scElement.style.transform = `rotate(${scDeg}deg)`;
}

// вызываем каждую секунду функцию
document.getElementById("start").addEventListener("click", () => {
  clearInterval(intervalId);
  updateClock();
  intervalId = setInterval(updateClock, 1000);
});

// пауза (сброс) времени
document.getElementById("pause").addEventListener("click", () => {
  clearInterval(intervalId);
});
