import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export default function WorkoutForm() {
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)
    const { dispatch } = useWorkoutsContext()
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = { title, load, reps }
        const res = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if (!res.ok) {
            setError(data.error)
            setEmptyFields(data.emptyFields)
        }
        if (res.ok) {
            setEmptyFields([])
            setError(null)
            setTitle("")
            setLoad("")
            setReps("")
            dispatch({ type: "CREATE_WORKOUT", payload: data })
        }
    }


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new exercise</h3>

            <label htmlFor="title">Exercise title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' className={emptyFields.includes("title") ? "error" : ""} />
            <label htmlFor="load">Load (lb):</label>
            <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} id='load' className={emptyFields.includes("load") ? "error" : ""} />
            <label htmlFor="reps">Reps:</label>
            <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} id='reps' className={emptyFields.includes("reps") ? "error" : ""} />
            <button>Add</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}
