const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.json({ msg: "welcome to the app" })
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))