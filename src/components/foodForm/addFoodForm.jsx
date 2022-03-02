import React, { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
    
    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState('');
    const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {name, calories, image, servings};
    props.newFood(newItem);
};

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => {handleNameInput(e)}} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(e) => {handleCaloriesInput(e)}} />


      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => {handleImageInput(e)}} />
      

      <label>Servings</label>
      <Input value={servings} type="text" onChange={(e) => {handleServingsInput(e)}} />
      

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
