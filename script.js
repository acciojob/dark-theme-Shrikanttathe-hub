//your code here
// const day = document.getElementById('day');
// const swap = document.getElementById('swap');
// const app = document.getElementById('app');

// function swapTheme(){
// 	app.classlist.active('night');
// 	document.getElementById('ptag').innerHTML = "“I am an AccioJob student, ready to become an awesome full stack developer.”";
// }

function swapTheme() {
  const appDiv = document.getElementById("app");
  const swapButton = document.getElementById("swap");
  const para = document.getElementById("ptag");

  // Toggle app div class
  if (appDiv.classList.contains("day")) {
    appDiv.classList.remove("day");
    appDiv.classList.add("night");
    document.getElementById("ptag").innerText = " 'I am an AccioJob student, ready to become an awesome full stack developer.' ";

  } else {
    appDiv.classList.remove("night");
    appDiv.classList.add("day");
	document.getElementById("ptag").innerText = "Hello World";
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
