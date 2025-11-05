"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Jarren Bess
      Date: Nov 5, 2025

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

let formFields = [
  riderName,
  ageGroup,
  bikeOption,
  routeOption,
  accOption,
  region,
  miles,
  comments,
];

document.getElementById("submitButton").onclick = showData;

function showData() {
  for (let field of formFields) {
    sessionStorage.setItem(field.name, field.value);
  }

  location.href = "/project09-02b.html";
}
