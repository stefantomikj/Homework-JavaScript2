let callButton = document.getElementById("myButton");
let printResult = document.getElementById("result");
let tabledata = document.getElementById("table");

callButton.addEventListener("click", function () {
  fetch("https://swapi.dev/api/people/1")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      printResult.innerText = `${response.name}`;
      tabledata.innerHTML += `<td> Person height:${response.height}</td>`;
      tabledata.innerHTML += `<td> Person mass:${response.mass}</td>`;
      tabledata.innerHTML += `<td> Person hair color:${response.hair_color}</td>`;
      tabledata.innerHTML += `<td> Person skin color:${response.skin_color}</td>`;
    })
    .catch(function (error) {
      console.error(error);
    });
});
