const slides = document.querySelectorAll(".lodka");

let positions = ["left", "active", "right"];

function update() {
  slides.forEach((slide, i) => {
    slide.classList.remove("left", "active", "right");
    slide.classList.add(positions[i]);
  });
}

// кнопка вперёд
document.querySelector(".next").addEventListener("click", () => {
  positions.push(positions.shift()); // сдвиг массива
  update();
});

// кнопка назад
document.querySelector(".prev").addEventListener("click", () => {
  positions.unshift(positions.pop());
  update();
});

update();