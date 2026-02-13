import {workoutProgram as training_plan} from '../utils/index.js'
import WorkoutCard from '../components/WorkoutCard.jsx'
import { useState, useEffect } from 'react';

export default function Grid(){
    
    //const isLocked = false;
    //const selectedWorkout = 1;
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    

    const [savedWorkouts, setSavedWorkouts] = useState(null);
    const completedWorkouts = Object.keys(savedWorkouts || {}).filter((val)=>{
        const entry = savedWorkouts[val];
        return entry.isComplete;
    });

    function handleSave(index,data){
        //to local storage
         const newObj = {
            ...savedWorkouts,
            [index]: {
                ...data,

                //this is super smart 
                isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete
            }
        }
        setSavedWorkouts(newObj)
        localStorage.setItem('brogram', JSON.stringify(newObj))
        setSelectedWorkout(null)
    }

    function handleComplete(index,data){
        //complete
        const newObj = {...data}
        newObj.isComplete = true;
        handleSave(index, newObj)
    }

    useEffect(()=>{
        if(!localStorage)
        {
            return
        }

        let savedData = {}
        if(localStorage.getItem('brogram'))
        {
            savedData =  JSON.parse(localStorage.getItem('brogram'))
        }
        setSavedWorkouts(savedData)

    }, [])

    return(
        //insane
        <div className="training-plan-grid">
    {Object.keys(training_plan).map((workout, workoutIndex) => {
        const isLocked = workoutIndex === 0 ? false :
            !completedWorkouts.includes(`${workoutIndex-1}`);


        const type = workoutIndex % 3 === 0 ? 'Arms & Chest' : workoutIndex % 3 === 1 ? 'Shoulders & Legs' : 'Arms & Back'; 
        const trainingPlan = training_plan[workoutIndex];
        const dayNum = ((workoutIndex / 8) <= 1) ? (0 + workoutIndex + 1) : (workoutIndex + 1)
        const icon =  workoutIndex % 3 === 0 ? (<i className='fa-solid fa-dumbbell'></i>) : (
                        workoutIndex % 3 === 1 ? (<i className='fa-solid fa-bolt'></i>) : (<i className='fa-solid fa-weight-hanging'></i>)
                    );
        
        if(workoutIndex === selectedWorkout){
            return (
                <WorkoutCard handleComplete={handleComplete} handleSave={handleSave} key={workoutIndex} trainingPlan = {trainingPlan} type = {type} workoutIndex = {workoutIndex} icon ={icon} dayNum = {dayNum} savedWeights={savedWorkouts?.[workoutIndex]?.weights} />
            )
        }
        return (
            
                <button onClick={()=>{
                    if(isLocked){return}
                    setSelectedWorkout(workoutIndex)}}
                 className={'card plan-card ' + (isLocked ? 'inactive' : '')} key={workoutIndex}>
                    <div className='plan-card-header'>
   
                        <p>Day {dayNum}</p>
                    </div>
                
                {isLocked ? (
                    <i className='fa-solid fa-lock'></i>
                ) : (
                   icon
                )}

                <div className='plan-card-header'>
                    <h4><b>{type}</b></h4>
                </div>

            </button>
        )
    })}
</div>
    )
}