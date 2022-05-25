import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const { addNewFood } = props;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    addNewFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    alert('Food created');
  };

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.checked);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={undefined} type="text" onChange={handleName} />

        <label>Image</label>
        <Input value={undefined} type="text" onChange={handleImage} />

        <label>Calories</label>
        <Input value={undefined} type="number" onChange={handleCalories} />

        <label>Servings</label>
        <Input value={undefined} type="number" onChange={handleServings} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
