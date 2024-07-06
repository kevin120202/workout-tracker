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

    let emptyFields = []
    if (!title) {
        emptyFields.push("title")
    }
    if (!load) {
        emptyFields.push("load")
    }
    if (!reps) {
        emptyFields.push("reps")
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "please fill all the fields", emptyFields })
    }

    // add doc to db
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).send(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// delete a workout
export const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such workout" })
    }
    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: "not found" })
    }
    res.status(200).json(workout)
}

// update a workout
export const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such workout" })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!workout) {
        return res.status(404).json({ error: "not found" })
    }
    res.status(200).json(workout)
}