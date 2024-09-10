
const ctrl_disp = document.getElementById("gamepadid");
const btndisp = document.getElementById("btndisp");

ctrl_disp.innerText = "keyboard + mouse";
const runningBroserCheck = () => {
  if (navigator.webkitGetGamepads) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener("gamepadconnected", () => {
  const gp = navigator.getGamepads()[0];
  ctrl_disp.textContent = `${gp.index}: ${gp.id}. webkit: ${runningBroserCheck()}`;

  if (gp.buttons[0].pressed) {
    gameLoop();
  }
});

window.addEventListener("gamepaddisconnected", () => {
  ctrl_disp.textContent = "keyboard + mouse";
});
function gameLoop() {
  const gp = navigator.getGamepads()[0];
  if (gp.buttons[0].pressed) {
    btndisp.textContent = "Button 0 pressed.";
  } else if (gp.buttons[1].pressed) {
    btndisp.textContent = "Button 1 pressed.";
  }
  else {
    btndisp.textContent = "Button not pressed.";
  }

  requestAnimationFrame(gameLoop);
}
