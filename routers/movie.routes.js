const express = require('express');

const { getAllMovies, getMovieById, addMovie } = require('../controllers');
const movieValidation = require('../middleware/validation/movie-validation');

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/movie/:id', getMovieById);
router.post('/movie', movieValidation, addMovie);

module.exports = router;
