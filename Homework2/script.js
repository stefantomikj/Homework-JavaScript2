//Exercise 1

/*let numberOfDigits = (number) => {
  return number.toString().length;
};
let oddOrEvenNumber = (number) => {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};
function isPositiveOrNegativeNumber(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "Number is zero";
  }
}
function infoResult(number) {
  console.log(
    numberOfDigits(number),
    oddOrEvenNumber(number),
    isPositiveOrNegativeNumber(number)
  );
  console.log(number);
}
infoResult(14345);*/

//Exercise 2

/*let colorInput = document.getElementById("colorText");
let sizeInput = document.getElementById("sizeText");
let element = document.getElementById("result");
let button = document.getElementById("myButton");

let textColor = (element, color = "black") => {
  colorInput.value = color;
  element.style.color = color;
};

let textSize = (element, textSize = 24) => {
  sizeInput.value = textSize;
  element.style.fontSize = textSize + "px";
};

button.addEventListener("click", () => {
  textColor(element, colorInput.value);
  textSize(element, sizeInput.value);
});*/

//EXERCISE 3

/*let arrayOfNumbers = [2, 5, 8, 9, 4];
let squaredArray = [];
let squareOfEachNumber = function () {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    squaredArray.push(arrayOfNumbers[i] ** 2);
  }
  return squaredArray;
};
squareOfEachNumber();
console.log(squaredArray);
let result = squaredArray;
console.log(result);*/

// EXERCISE 4
/*(function (number) {
  //debugger;
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  console.log(result);
})(5);*/

// EXERCISE 5

/*let string = "Stefan";
let reverseString = (string) => {
  //debugger;
  let reversed = "";

  for (let alphabet of string) {
    reversed = alphabet + reversed;
  }
  return reversed;
};
let result = reverseString("Stefan");
console.log(result);*/

//Exercise 6

/*let array = [
  -10,
  5,
  7894,
  NaN,
  "Hello world",
  Infinity,
  false,
  [Object, Object],
  25,
  (name) => `Hello ${name}`,
  -Infinity,
  ["hi", 28, -93, true],
  {
    name: "Bob",
    age: 23,
  },
  undefined,
  14,
  null,
  159,
  0,
  -11,
];
let filteredArray1 = [];

let filteredArray = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] > 0) {
      filteredArray1.push(array[i]);
    }
  }
  return filteredArray1;
};
filteredArray(array);
let resultfilteredArray = filteredArray(array);
console.log(resultfilteredArray);

let productOfNumbers = function (filteredArray) {
  let product = 1;
  for (let i = 0; i < filteredArray.length; i++) {
    product = product * filteredArray[i];
  }
  return product;
};
let resultProduct = productOfNumbers(resultfilteredArray);
console.log(resultProduct);*/

// EXERCISE 7
/*let string = "frosina";
let array = [];
let stringfunction = function (string) {
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      array.push(string[i]);
    }
  }
  return array;
};
let resultVowels = stringfunction(string);
console.log(resultVowels);

let numberOfVowels = (array) => {
  let summary = 0;
  for (let i = 0; i < array.length; i++) {
    summary++;
  }
  return summary;
};
let numberVowels = numberOfVowels(resultVowels);
console.log(`Number of Vowels is : ${numberVowels}`);*/
