const { PrismaClient } = require('@prisma/client')
const NotFoundError = require('../errors/NotFoundError');

const prisma = new PrismaClient();

const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await prisma.movie.findMany({
      include: {
        director: true,
      },
    });

    return res.status(200).json({
      message: 'Success',
      data: allMovies,
    });
  } catch (error) {
    return next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await prisma.movie.findUnique({
      where: {
        id: parseInt(id, 10),
      },
      include: {
        director: true,
      },
    });

    if (!movie) {
      throw new NotFoundError('Movie tidak ditemukan');
    }

    return res.status(200).json({
      message: 'Success',
      data: movie,
    });
  } catch (error) {
    return next(error);
  }
};

const addMovie = async (req, res, next) => {
  try {
    const movie = req.body;

    const newMovie = await prisma.movie.create({
      data: movie,
    });

    return res.status(201).json({
      message: 'Movie berhasil ditambahakan',
      data: newMovie,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
};
