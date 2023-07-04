const express = require('express')
const Workout = require('../models/workoutModel')
const { postWorkout,
        getWorkouts,
        getWorkout,
        updateWorkout,
        deleteWorkout} = require('../controllers/workoutController')
const router = express.Router()
router.get('/', getWorkouts)

router.get('/:id',getWorkout)

//post a workout
router.post('/', postWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router