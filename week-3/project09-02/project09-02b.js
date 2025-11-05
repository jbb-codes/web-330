"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Jarren Bess
      Date: Nov 5, 2025

      Filename: project09-02b.js
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

let formFields = {
  riderName,
  ageGroup,
  bikeOption,
  routeOption,
  accOption,
  region,
  miles,
  comments,
};

// I wanted to find a loop solution and AI suggested using Object.entries
// with this implementation. I had to convert fromFields into an object
// literal so the key is the element name and not an array index.
for (const [key, element] of Object.entries(formFields)) {
  element.textContent = sessionStorage.getItem(key);
}

// This is what I think the book was wanting
// riderName.textContent = sessionStorage.getItem("riderName");
// ageGroup.textContent = sessionStorage.getItem("ageGroup");
// bikeOption.textContent = sessionStorage.getItem("bikeOption");
// routeOption.textContent = sessionStorage.getItem("routeOption");
// accOption.textContent = sessionStorage.getItem("accOption");
// region.textContent = sessionStorage.getItem("region");
// miles.textContent = sessionStorage.getItem("miles");
// comments.textContent = sessionStorage.getItem("comments");
