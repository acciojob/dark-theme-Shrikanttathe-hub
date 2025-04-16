
function swapTheme() {
  const appDiv = document.getElementById("app");
  const swapButton = document.getElementById("swap");
  const para = document.getElementById("ptag");

  // Toggle app div class
  if (appDiv.classList.contains("day")) {
    appDiv.classList.remove("day");
    appDiv.classList.add("night");
   
  } else {
    appDiv.classList.remove("night");
    appDiv.classList.add("day");
  }

  // Toggle button class
  if (swapButton.classList.contains("button_day")) {
    swapButton.classList.remove("button_day");
    swapButton.classList.add("button_night");
  } else {
    swapButton.classList.remove("button_night");
    swapButton.classList.add("button_day");
  }
}
