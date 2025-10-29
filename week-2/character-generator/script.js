/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Jarren Bess
  Date: Oct 28, 2025
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  function getName() {
    return name;
  }

  function getGender() {
    return gender;
  }

  function getClass() {
    return characterClass;
  }

  return { getName, getGender, getClass };
}

document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault();

  const heroName = document.querySelector("#heroName").value;
  const heroGender = document.querySelector("#heroGender").value;
  const heroClass = document.querySelector("#heroClass").value;

  const character = createCharacter(heroName, heroGender, heroClass);

  document.querySelector(
    ".charName"
  ).textContent = `Name: ${character.getName()}`;

  document.querySelector(
    ".charGender"
  ).textContent = `Gender: ${character.getGender()}`;

  document.querySelector(
    ".charClass"
  ).textContent = `Class: ${character.getClass()}`;
});
