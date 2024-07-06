import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export default function ExerciseDetails({ exercise }) {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const res = await fetch(`/api/workouts/${exercise._id}`, {
            method: "DELETE",
        })
        const data = await res.json()
        if (res.ok) {
            dispatch({ type: "DELETE_WORKOUT", payload: data })
        }
    }

    return (
        <div className="workout-details">
            <h4>{exercise.title}</h4>
            <p><strong>Load (lb): </strong>{exercise.load}</p>
            <p><strong>Reps: </strong>{exercise.reps}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}
