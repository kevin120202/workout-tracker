import express from "express"
const app = express()
import router from "./routes/workouts.js"

const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/workouts", router)

// listen for requests
app.listen(PORT, () => console.log(`running on port ${PORT}`))