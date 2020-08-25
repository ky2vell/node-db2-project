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
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db('cars').where({ id }).first();

    res.status(200).json({ data: car });
  } catch (err) {
    next(err);
  }
});

// // @desc    Create car
// // @route   POST /api/cars
router.post('/', async (req, res, next) => {
  try {
    const id = await db
      .insert({
        VIN: req.body.VIN,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission: req.body.transmission,
        titleStatus: req.body.titleStatus
      })
      .into('cars');

    const car = await db('cars').where({ id }).first();

    res.status(201).json({ data: car });
  } catch (err) {
    next(err);
  }
});

// // @desc    Update car
// // @route   PUT /api/cars/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await db('cars').where({ id }).update({
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmission: req.body.transmission,
      titleStatus: req.body.titleStatus
    });

    const car = await db('cars').where({ id }).first();

    res.status(200).json({ data: car });
  } catch (err) {
    next(err);
  }
});

// // @desc    Delete car
// // @route   DELETE /api/cars/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const count = await db('cars').where({ id }).del();

    res.status(200).json({ message: `${count} record(s) has been deleted` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
