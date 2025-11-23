/*
Pragmatic JavaScript
Chapter 2
Programming Assignment

Author: Jarren Bess
Date: Nov 20, 2025
Filename: script.js
*/

"use strict";

// Create an in-memory object array for each table in the restaurant
let tables = [
  {
    "table number": 1,
    capacity: 4,
    isReserved: false,
  },
  {
    "table number": 2,
    capacity: 6,
    isReserved: true,
  },
  {
    "table number": 3,
    capacity: 4,
    isReserved: false,
  },
];

const tableSelection = document.querySelector("#tableNumber");
const messageBox = document.querySelector("#message");

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  if (!tables[tableNumber - 1]) {
    messageBox.classList.add("error");
    callback("Not a valid table");
    return;
  }

  if (tables[tableNumber - 1].isReserved === false) {
    tables[tableNumber - 1].isReserved = true;
    setTimeout(() => {
      messageBox.classList.remove("error");
      messageBox.classList.add("success");
      callback("Table reserved");
    }, time);
  } else {
    messageBox.classList.remove("success");
    messageBox.classList.add("error");
    callback("Table not available");
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    reserveTable(
      tableSelection.value,
      (message) => {
        messageBox.textContent = message;
      },
      2000
    );
  });
