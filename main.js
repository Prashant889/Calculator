let inputs = document.querySelector("input");
let button = document.querySelectorAll("button");
let string = "";
let arr = Array.from(button);
arr.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML == "AC") {
      string = "";
      inputs.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      inputs.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      inputs.value = string;
    } else {
      string += e.target.innerHTML;
      inputs.value = string;
    }
  });
});
