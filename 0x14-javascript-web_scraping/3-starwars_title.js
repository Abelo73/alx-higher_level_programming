#!/usr/bin/node
const request = require('request');

function getMovieTitle(movieId) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(url, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: ${response.statusCode}`);
    } else {
      const movie = JSON.parse(body);
      console.log(`Title: ${movie.title}`);
    }
  });
}

const movieId = process.argv[2];
if (!movieId) {
  console.error('Error: Movie ID argument is missing');
  process.exit(1);
}

getMovieTitle(movieId);
