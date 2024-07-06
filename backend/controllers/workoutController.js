import Workout from "../models/WorkoutModel.js"
import mongoose from "mongoose"

// get all workouts
export const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({})
    res.status(200).json(workouts)
}

// get a single workout
export const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such workout" })
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({ error: "not found" })
    }
    res.status(200).json(workout)
}

// create new workout
export const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    // add doc to db
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).send(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// delete a workout


// update a workout