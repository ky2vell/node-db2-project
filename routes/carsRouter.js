const express = require('express');
const db = require('../data/config');

const router = express.Router();

// @desc    Get all cars
// @route   GET /api/cars
router.get('/', async (req, res, next) => {
  try {
    const cars = await db('cars');

    res.status(200).json({ count: cars.length, data: cars });
  } catch (err) {
    next(err);
  }
});

// @desc    Get single car
// @route   GET /api/cars/:id
// router.get('/:id', async (req, res, next) => {

// });

// // @desc    Create car
// // @route   POST /api/cars
// router.post('/', async (req, res, next) => {

// });

// // @desc    Update car
// // @route   PUT /api/cars/:id
// router.put('/:id', async (req, res, next) => {

// });

// // @desc    Delete car
// // @route   DELETE /api/cars/:id
// router.delete('/:id', async (req, res, next) => {

// });

module.exports = router;
