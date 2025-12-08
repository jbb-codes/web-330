/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Jarren Bess
  Date: Dec 6, 2025
  Filename: script.js
*/

"use strict";

let chefs = [
  {
    name: "John",
    specialty: "Soup",
    weakness: "Fish",
    restaurantLocation: "New York",
  },
  {
    name: "Bob",
    specialty: "Steak",
    weakness: "Sauce",
    restaurantLocation: "Dallas",
  },
  {
    name: "Stewart",
    specialty: "Pizza",
    weakness: "Creme Brulee",
    restaurantLocation: "Chicago",
  },
];

function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve(chefs[0]);
    // }, 2000);
    reject("Error promise failed");
  });
}

function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[1]);
    }, 3000);
    // reject("Error promise failed");
  });
}

function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[2]);
    }, 4000);
    // reject("Error promise failed");
  });
}

// Had to use AI to help figure out how to implement updating the page
// with chef info and adding the error message under the chef info
// that failed to load on rejection
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then((results) => {
    console.log(results);
    results.forEach((result, index) => {
      let chefIndex = index + 1;

      if (result.status === "fulfilled") {
        console.log(result);

        const chefName = document.querySelector(`.chef${chefIndex}Name`);
        const chefSpecialty = document.querySelector(
          `.chef${chefIndex}Specialty`
        );
        const chefWeakness = document.querySelector(
          `.chef${chefIndex}Weakness`
        );
        const chefLocation = document.querySelector(
          `.chef${chefIndex}Location`
        );

        let chef = result.value;

        chefName.textContent = chef.name;
        chefSpecialty.textContent = chef.specialty;
        chefWeakness.textContent = chef.weakness;
        chefLocation.textContent = chef.restaurantLocation;
      } else {
        const chefNum = document.querySelector(`#chef${chefIndex}`);
        const errorEl = document.querySelector("#error");

        chefNum.after(errorEl);

        errorEl.textContent = `Failed to load chef info`;
        errorEl.hidden = false;
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
