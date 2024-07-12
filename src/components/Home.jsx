import React, { useEffect, useState } from 'react'
import CardsExercises from './CardsExercises';
import axios from "axios";


const Home = () => {
    const [exercises, newExercises] = useState([]);
    const [createExercise, newCreateExercise] = useState({
        name: "", difficulty: "", duration:"" , imageUrl: "" 
    });

    const fetchAPI = async()=>{
        const res = await fetch("http://localhost:5000/api/exercises")
        const data = await res.json();
        newExercises(data);
    }
    
    const createExercises = async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/exercises", createExercise)
            fetchAPI();
            newCreateExercise({
                name: "",
                difficulty: "",
                duration: "",
                imageUrl: ""
            })
            alert("exercise added sexfully")
        } catch (error) {
            console.log(error);
        }
    }

    

    const handleChange = (e)=>{
        newCreateExercise({
            ...createExercise, 
            [e.target.name]:e.target.value, 
        })
    }
    useEffect(()=>{
        fetchAPI()
    },[])
    return (
        <div>
        {exercises.map((card)=>{
            return <CardsExercises cardsprop = {card} fetchAPI={fetchAPI}/>
        })}
        <div>
            <form action='submit' method='post' onSubmit={createExercises}>
                <h1>Create</h1>
                <input type="text" name="name" id="" placeholder='Enter name' onChange={handleChange} value={createExercise.name}/>
                <input type="text" name="difficulty" id="" placeholder='difficulty' onChange={handleChange} value={newExercises.difficulty}/>
                <input type="number" name="duration" id="" placeholder='duration' onChange={handleChange} value={newExercises.duration}/>
                <input type="text" name="imgUrl" id="" placeholder='select image' onChange={handleChange} value={newExercises.imageUrl}/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Home