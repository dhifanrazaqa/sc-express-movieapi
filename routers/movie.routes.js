const express = require('express');

const { getAllMovies, getMovieById } = require('../controllers');

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/movie/:id', getMovieById);

module.exports = router;
