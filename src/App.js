//import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/foodBox/FoodBox';
import AddFoodForm from './components/foodForm/addFoodForm';
import Search from './components/search/search';

function App() {
  const [dishes, setDishes] = useState(foods);

  const addFood = (newDishes) => {
    const updateddishes = [...dishes, newDishes];
    setDishes(updateddishes);
  };

  const searching = (searchQuery) => {
    let filtersandwhiches = dishes.filter((ele) =>
      ele.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setDishes(filtersandwhiches);
  };

  return (
    <div className="App">
      <AddFoodForm newFood={addFood}/>

      <Button> Hide Form / Add New Food </Button>

      <Search hotdog={searching}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {dishes.map((el) => <FoodBox food={el} />)}
      </Row>
    </div>
  );
}

export default App;
