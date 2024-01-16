let button = document.getElementById("myButton");
let inputSearch = document.getElementById("search");
let result = document.getElementById("result");
let arrayOfMovies = ["Prasina", "Friends", "Terminator", "Homealone"];
button.addEventListener("click", function () {
  let input = inputSearch.value;
  debugger;
  for (let i = 0; i <= arrayOfMovies.length; i++) {
    if (input.toLowerCase() === arrayOfMovies[i].toLowerCase()) {
      result.innerText = "The movie can be rented";
      result.style.color = "green";
      return;
    } else {
      result.innerText = "The movie can't be rented";
      result.style.color = "red";
    }
    inputSearch.value = "";
  }
});
