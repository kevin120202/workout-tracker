import express from "express"
import { createWorkout, getWorkout, getWorkouts } from "../controllers/workoutController.js"
const router = express.Router()

// get all workouts
router.get("/", getWorkouts)

// get single workout
router.get("/:id", getWorkout)

// post new workout
router.post("/", createWorkout)

// delete workout
router.delete("/:id", (req, res) => {
    res.json({ msg: "delete workout" })
})

// update workout
router.put("/:id", (req, res) => {
    res.json({ msg: "delete workout" })
})

export default router
