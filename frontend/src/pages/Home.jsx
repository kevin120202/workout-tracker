import React, { useEffect, } from 'react'
import ExerciseDetails from '../components/ExerciseDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export default function Home() {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch("/api/workouts")
            const data = await res.json()

            if (res.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: data })
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className='home'>
            <div className="workouts">
                {workouts && workouts.map(exercise => {
                    return <ExerciseDetails key={exercise._id} exercise={exercise} />
                })}
            </div>
            <WorkoutForm />
        </div>
    )
}
