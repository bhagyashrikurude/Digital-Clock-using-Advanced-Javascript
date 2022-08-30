let startStopBtn = setInterval(timeStart, 1000);
function timeStart() {
  let date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}
let date = new Date();
document.getElementById("date").innerHTML =
  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
