/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Jarren Bess
  Date: Dec 12, 2025
  Filename: script.js
*/

"use strict";

const titleInput = document.getElementById("title-input");
const movieInfo = document.querySelector("#movie-info");
const movieInfoChildren = document.querySelectorAll("#movie-info > *");
const errorMessage = document.querySelector("#error-message");

const movies = [
  {
    title: "Ratatouille",
    director: "Brad Bird",
    releaseYear: "2007",
    synopsis:
      "Remy dreams of becoming a great chef, despite being a rat in a definitely rodent-phobic profession. He moves to Paris to follow his dream, and with the help of hapless garbage boy Linguini he puts his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually gets the chance to prove his culinary abilities to a great food critic but is the food good? A Pixar animation.",
  },
  {
    title: "Tarzan",
    director: "Chris Buck and Kevin Lima",
    releaseYear: "1999",
    synopsis:
      "In this Disney animated tale, the orphaned Tarzan (Chris Buck) grows up in the remote African wilderness, raised by the gentle gorilla Kala (Kevin Lima). When a British expedition enters the jungle, Tarzan encounters the beautiful Jane (Edgar Rice Burroughs) and recognizes that, like her, he's human. Falling in love with Jane, Tarzan is torn between embracing civilization and staying with his gorilla family, which becomes threatened by the ruthless hunter Clayton (Noni White).",
  },
];

function fetchMovie(title) {
  // Copilot suggested I return the promise directly instead of initializing it to a variable
  // It also corrected my return statement to be outside of the setTimeout function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let movie = movies.find((movie) => movie.title === title);
      if (movie) resolve(movie);
      reject("Movie not found");
    }, 2000);
  });
}

async function displayMovie(e) {
  try {
    e.preventDefault();
    hideAndClearMovieInfo();
    let movie = await fetchMovie(titleInput.value);

    // Used copilot to figure out how to update movie properties with forEach
    // it suggested using a properties array and showed forEach implementation;
    // I later thought to use Object.keys instead of hard coding a properties
    // array.
    let props = Object.keys(movies[0]);
    movieInfoChildren.forEach((el, i) => {
      el.textContent = movie[props[i]];
    });
    movieInfo.classList.remove("is-hidden");
  } catch (error) {
    console.error(error);
    errorMessage.textContent = `${error}`;
  }
}

function hideAndClearMovieInfo() {
  errorMessage.textContent = "";
  movieInfoChildren.forEach((el) => (el.textContent = ""));
  movieInfo.classList.add("is-hidden");
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);
