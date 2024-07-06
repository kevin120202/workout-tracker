import express from "express"
const router = express.Router()


// get all workouts
router.get("/", (req, res) => {
    res.json({ msg: "get all workouts" })
})

// get single workout
router.get("/:id", (req, res) => {
    res.json({ msg: "get single workout" })
})

// post new workout
router.post("/", (req, res) => {
    res.json({ msg: "post workout" })
})

// delete workout
router.delete("/:id", (req, res) => {
    res.json({ msg: "delete workout" })
})

// update workout
router.put("/:id", (req, res) => {
    res.json({ msg: "delete workout" })
})

export default router
