/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
  "tt0120338": {
    "imdbID":"tt0120338",
    "Title": "Titanic",
    "Released": "1997-12-19",
    "Runtime": 194,
    "Genres": ["Drama", "Romance"],
    "Directors": ["James Cameron", "Bernold Abarca"],
    "Writers": ["James Cameron"],
    "Actors": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    "Plot": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 75,
    "imdbRating": 8.0
  },

  "tt33088452": {
    "imdbID":"tt33088452",
    "Title": "Regretting You",
    "Released": "2025-10-24",
    "Runtime": 116,
    "Genres": ["Drama", "Romance"],
    "Directors": ["Josh Boone"],
    "Writers": ["Susan McMartin", "Colleen Hoover"],
    "Actors": ["Allison Williams", "Mckenna Grace", "Dave Franco"],
    "Plot": "A mother and daughter must grapple with what's left after a devastating accident reveals a shocking betrayal and forces them to confront family secrets, redefine love, and rediscover themselves.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTNlM2MzM2MtZGU3OC00ZTM0LWFhYmYtYTQ1M2RhZTcwYjViXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 33,
    "imdbRating": 6.0
  },

  "tt1638002": {
    "imdbID":"tt1638002",
    "Title": "Love, Rosie",
    "Released": "2014-10-17",
    "Runtime": 102,
    "Genres": ["Comedy", "Romance"],
    "Directors": ["Christian Ditter"],
    "Writers": ["Juliette Towhidi", "Cecelia Ahern"],
    "Actors": ["Lily Collins", "Sam Claflin", "Christian Cooke"],
    "Plot": "Rosie and Alex have been best friends since they were 5, so they couldn't possibly be right for each other--or could they? When it comes to love, life and making the right choices, these two are their own worst enemies.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg",
    "Metascore": 44,
    "imdbRating": 7.1
  }
}
//exports my movies
module.exports = movies;