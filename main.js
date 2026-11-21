const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 450;

const backdrop = new Image();
backdrop.src = "backdrop.png";
c.imageSmoothingEnabled = false;

const player = new Image();
player.src = "player.png";
c.imageSmoothingEnabled = false;

let x = 0;
let y = 0;
let sHeight = 48;
let sWidth = 48;
let speed = 2;

const keys = {};

  window.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

function gameLoop () {
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (keys["KeyD"]) {
    x = x + speed;
  };

  if(keys["KeyA"]){
    x = x - speed;
  };

  if(keys["KeyW"]){
    y = y - speed;
  };

  if(keys["KeyS"]){
    y = y + speed;
  }

  if(backdrop.complete && backdrop.naturalWidth > 0){
    c.drawImage(backdrop, 0, 0, canvas.width, canvas.height);
  }

  if(player.complete && player.naturalWidth > 0){
    c.drawImage(player, 0, 0, sWidth, sHeight, x, y, sWidth * 2, sHeight * 2);
  };
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);