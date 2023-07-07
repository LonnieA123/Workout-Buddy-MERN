const express = require('express')
const Workout = require('../models/workoutModel')
const { postWorkout,
                getWorkouts,
                getWorkout,
                updateWorkout,
                deleteWorkout
                        } = require('../controllers/workoutController')
const router = express.Router()
router.get('/', getWorkouts)

//get specific workout
router.get('/:id',getWorkout)

//post a workout
router.post('/', postWorkout)

//delete workout
router.delete('/:id',deleteWorkout)

//update workout
router.patch('/:id', updateWorkout)

module.exports = router