import React from 'react'
import axios from "axios";


const CardsExercises = ({cardsprop, fetchAPI}) => {

    const deleteExercise = async()=>{
        try {
            await axios.delete(`http://localhost:5000/api/exercises/${cardsprop._id}`)
        fetchAPI();
        alert("deleted sexfully")
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
    <div className='cardsmain' key={cardsprop._id}>
        <div className='newDiv'>
            <button onClick={deleteExercise}>Delete</button>
            <img src={cardsprop.imageUrl}></img>
            <p>name:{cardsprop.name}</p>
            <p>difficulty:{cardsprop.difficulty}</p>
            <p>duration:{cardsprop.duration}</p>
        </div>
        

    </div>
  )
}

export default CardsExercises