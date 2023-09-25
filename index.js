function clickNumber(numberValue) {
  document.getElementById("window").innerHTML += "" + numberValue;
}

function showResult(str) {
  document.getElementById("window").innerHTML = eval(str);
}

function clearWindowByOne(str) {
  let array = str.split("");
  array[array.length - 1] = "";
  document.getElementById("window").innerHTML = array.join("");
}

function clearAll() {
  document.getElementById("window").innerHTML = "";
}
