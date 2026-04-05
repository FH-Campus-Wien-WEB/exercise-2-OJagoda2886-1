const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');
//console.log(Object.values(movieModel))



const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and eturn the movies from 
     the model as an array */
  res.json(Object.values(movieModel));
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */

  const movie = movieModel[req.params.imdbID];
 
  if (!movie) {
    return res.sendStatus(404);
  }
  res.json(movie);

})


/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.put('/movies/:imdbID', function (req, res) {

    const imdbID = req.params.imdbID; // from URL
    const data = req.body; // parsed JSON body
    //If movie doesn't exist, create a new one 
    if (!movieModel[imdbID]) {
      movieModel[imdbID] = data;
      return res.status(201).send(data);
    }

    movieModel[imdbID] = data;
    res.sendStatus(200)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

