import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Divider, Input, Button } from "antd";


// Your code here
export default function AddFoodForm({ onCreateFood }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState(1);


    const handleSubmit = (event) => {
        //tenemos que crear un objeto de tipo food
        event.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
            id: uuidv4()
        }
        console.log(newFood);
        onCreateFood(newFood);
    }

    return <div>
        <form className="form" onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <Input id="name" type="text" name="name" maxLength={50} value={name} onChange={(e) => setName(e.target.value)} required></Input>

            <label htmlFor="image">Image</label>
            <Input id="image" name="image" type="url" required value={image} onChange={(e) => setImage(e.target.value)}></Input>

            <label htmlFor="calories">Calories</label>
            <Input id="calories" name="calories" type="number" min={0} max={10000} value={calories} onChange={(e) => setCalories(e.target.value)} required />

            <label htmlFor="servings">Servings</label>
            <Input id="servings" name="servings" type="number" min={1} max={1000} value={servings} onChange={(e) => setServings(e.target.value)} required></Input>
            
            <Button>Create</Button>
        </form>

    </div>
}