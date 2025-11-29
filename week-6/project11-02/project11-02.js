"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Jarren Bess
      Date: Nov 29, 2025

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  let codeValue = postalCode.value;
  let countryValue = country.value;
  place.value = "";
  region.value = "";

  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    // Used AI to help with an issus, I forgot that the implicit return only
    // happens without braces in arrow functions. I did not realize with then
    // statements you have to explicitly return a value, I thought promises
    // resolved down through all the methods automatically
    .then((res) => res.json())
    .then((json) => {
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
    })
    .catch((error) => console.log(error));
};
