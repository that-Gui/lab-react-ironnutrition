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
  const [showform, setshowForm] = useState(false);

  const bin = (dishName) => {
    const dumpster = dishes.filter((ele) => {
      return ele.name !== dishName;
    });
    setDishes(dumpster);
  };

  const toggleShow = () => {
    setshowForm(!showform);
    console.log(showform);
  };

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
      { showform && <AddFoodForm newFood={addFood}/>}

      <Button onClick={toggleShow}> Hide & Seek </Button>

      <Search hotdog={searching}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {dishes.map((el) => <FoodBox food={el} bin={bin}/>)}
      </Row>
    </div>
  );
}

export default App;
