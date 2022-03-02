//import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/foodBox/FoodBox';
import AddFoodForm from './components/foodForm/addFoodForm';

function App() {
  const [dishes, setDishes] = useState(foods);

  const addFood = (newDishes) => {
    const updateddishes = [...dishes, newDishes];
    setDishes(updateddishes);
    console.log(updateddishes);
  };

  return (
    <div className="App">
      <AddFoodForm newFood={addFood}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {dishes.map((el) => <FoodBox food={el} />)}
      </Row>
    </div>
  );
}

export default App;
