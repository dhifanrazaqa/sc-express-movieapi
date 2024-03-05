const movies = require('../dataMock/movies');

const getAllMovies = (req, res) => {
  res.status(200).json({
    data: movies,
  });
};

const getMovieById = (req, res) => {
  const { id } = req.params;

  const movie = movies.filter((item) => item.id === id);

  res.status(200).json({
    data: movie,
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
};
