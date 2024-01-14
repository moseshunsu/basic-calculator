"use strict";

const textArea = document.getElementById("text-area");
const additionButton = document.getElementById("addition");
const substractionButton = document.getElementById("substraction");
const multiplicationButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const decimalButton = document.getElementById("decimal");
const equalToEl = document.getElementById("equals");

const zeroEl = document.getElementById("zero");
const oneEl = document.getElementById("one");
const twoEl = document.getElementById("two");
const threeEl = document.getElementById("three");
const fourEl = document.getElementById("four");
const fiveEl = document.getElementById("five");
const sixEl = document.getElementById("six");
const sevenEl = document.getElementById("seven");
const eightEl = document.getElementById("eight");
const nineEl = document.getElementById("nine");

let expressionVariable = "";
let storedNumber = "";
// let zeroChecker = 0;
// textArea.value = 0;

clearButton.addEventListener("click", function () {
  textArea.value = "";
});

deleteButton.addEventListener("click", function () {
  textArea.value.length === ""
    ? ""
    : (textArea.value = textArea.value.substring(0, textArea.value.length - 1));
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    textArea.value.length === ""
      ? ""
      : (textArea.value = textArea.value.substring(
          0,
          textArea.value.length - 1
        ));
  }
});

zeroEl.addEventListener("click", function () {
  textArea.value += 0;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "0") {
    textArea.value += "0";
  }
});

oneEl.addEventListener("click", function () {
  textArea.value += 1;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    textArea.value += "1";
  }
});

twoEl.addEventListener("click", function () {
  textArea.value += 2;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "2") {
    textArea.value += "2";
  }
});

threeEl.addEventListener("click", function () {
  textArea.value += 3;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "3") {
    textArea.value += "3";
  }
});

fourEl.addEventListener("click", function () {
  textArea.value += 4;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "4") {
    textArea.value += "4";
  }
});

fiveEl.addEventListener("click", function () {
  textArea.value += 5;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "5") {
    textArea.value += "5";
  }
});

sixEl.addEventListener("click", function () {
  textArea.value += 6;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "6") {
    textArea.value += "6";
  }
});

sevenEl.addEventListener("click", function () {
  textArea.value += 7;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "7") {
    textArea.value += "7";
  }
});

eightEl.addEventListener("click", function () {
  textArea.value += 8;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "8") {
    textArea.value += "8";
  }
});

nineEl.addEventListener("click", function () {
  textArea.value += 9;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "9") {
    textArea.value += "9";
  }
});

additionButton.addEventListener("click", function () {
  textArea.value += "+";
  expressionVariable += textArea.value;
  textArea.value = "";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "+") {
    textArea.value += "+";
    expressionVariable += textArea.value;
    textArea.value = "";
  }
});

substractionButton.addEventListener("click", function () {
  textArea.value += "-";
  expressionVariable += textArea.value;
  textArea.value = "";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "-") {
    textArea.value += "-";
    expressionVariable += textArea.value;
    textArea.value = "";
  }
});

multiplicationButton.addEventListener("click", function () {
  textArea.value += "*";
  expressionVariable += textArea.value;
  textArea.value = "";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "*") {
    textArea.value += "*";
    expressionVariable += textArea.value;
    textArea.value = "";
  }
});

divisionButton.addEventListener("click", function () {
  textArea.value += "/";
  expressionVariable += textArea.value;
  textArea.value = "";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "/") {
    textArea.value += "/";
    expressionVariable += textArea.value;
    textArea.value = "";
  }
});

equalToEl.addEventListener("click", function () {
  expressionVariable += textArea.value;
  storedNumber = eval(expressionVariable);
  textArea.value = storedNumber;
  expressionVariable = "";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "=" || e.key === "Enter") {
    expressionVariable += textArea.value;
    storedNumber = eval(expressionVariable);
    textArea.value = storedNumber;
    expressionVariable = "";
  }
});

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });
