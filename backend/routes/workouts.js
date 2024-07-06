import express from "express"
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from "../controllers/workoutController.js"
const router = express.Router()

// get all workouts
router.get("/", getWorkouts)

// get single workout
router.get("/:id", getWorkout)

// post new workout
router.post("/", createWorkout)

// delete workout
router.delete("/:id", deleteWorkout)

// update workout
router.put("/:id", updateWorkout)

export default router
