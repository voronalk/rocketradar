const rocket = document.querySelector(".rocket");
console.log(rocket)
const path = document.querySelector(".path");

const start = { x: 0, y: 0 };
const end = { x: 500, y: 200 };
const duration = 3000; // milliseconds

const animation = rocket.animate(
  [
    { transform: `translate(${start.x}px, ${start.y}px) rotate(0)` },
    { transform: `translate(${end.x}px, ${end.y}px) rotate(360deg)` },
  ],
  {
    duration: duration,
    easing: "linear",
    iterations: Infinity,
  }
);

path.style.animation = `dash ${duration}ms linear forwards`;
