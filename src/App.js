import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';

function App() {
  const [searchFoods, setSearchFoods] = useState(foods);
  const [allFoods, setAllFoods] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...allFoods, newFood];
    setAllFoods(updatedFood);
  };

  const searchFilter = (search) => {
    let filteredFoods = allFoods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFoods(filteredFoods);
  };

  const deleteFood = (foodname) => {
    const filteredFoods = allFoods.filter((foods) => {
      return foods.name !== foodname;
    });

    setSearchFoods(filteredFoods);
    setAllFoods(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <Searchbar searchFilter={searchFilter} />
      {searchFoods.map((el) => {
        return (
          <div>
            <FoodBox food={el} deleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
