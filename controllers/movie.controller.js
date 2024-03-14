const movies = require('../dataMock/movies');
const NotFoundError = require('../errors/NotFoundError');

const getAllMovies = (req, res) => {
  res.status(200).json({
    data: movies,
  });
};

const getMovieById = (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = movies.filter((item) => item.id === id);

    if (movie.length === 0) {
      throw new NotFoundError('Movie tidak ditemukan');
    }

    res.status(200).json({
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

const addMovie = (req, res, next) => {
  try {
    const { id, title, genre } = req.body;

    movies.push({
      id,
      title,
      genre,
    });

    res.status(201).json({
      message: 'Movie berhasil ditambahakan',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
};
