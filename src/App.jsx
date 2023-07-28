import { useState } from "react";
import "./App.css";
import controls from "../src/assets/icons/controls.svg";
import fire from "../src/assets/icons/fire.svg";
import hot from "../src/assets/icons/hot.svg";
import magnify from "../src/assets/icons/magnify.svg";
import pimenta from "../src/assets/icons/pimenta.svg";
import pizza from "../src/assets/icons/pizza.svg";
import saveReg from "../src/assets/icons/bookmark-regular.svg";
import saveSolid from "../src/assets/icons/save-solid.svg";
import sine from "../src/assets/icons/sino.svg";
import sorvete from "../src/assets/icons/sorvete.svg";
import user from "../src/assets/icons/user.svg";
import clock from "../src/assets/icons/clock-regular.svg";
import star from "../src/assets/icons/star-solid.svg";
import plus from "../src/assets/icons/plus.svg";
import house from "../src/assets/icons/house.svg";

function Toolbar() {
  return (
    <div id="toolbar">
      <img src={user} />
      <img src={sine} />
    </div>
  );
}

function Wellcome() {
  return (
    <div id="well">
      <p>Hello. Teresa!</p>
      <p>Make your own food, stay at home</p>
    </div>
  );
}

function Search() {
  return (
    <div id="search">
      <input />
      <img src={magnify} id="magnify" />
      <label>Search any recipe</label>
      <img src={controls} id="controls" />
    </div>
  );
}

function Carrossel() {
  const items = [
    {
      id: 1,
      title: "Popular",
      icon: fire,
    },
    {
      id: 2,
      title: "Western",
      icon: pizza,
    },
    {
      id: 3,
      title: "Drinks",
      icon: hot,
    },
    {
      id: 4,
      title: "Desserve",
      icon: sorvete,
    },
  ];

  return (
    <div id="carrossel-menu">
      {items.map((item) => (
        <div key={item.id} id="carrossel-item">
          <img src={item.icon} />
          <p id="title">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

function Card(props){
 return (
  <div id="card">

    <img src={props.img} />
    <div id="time">
      <img src={clock} />
    </div>

    <div id="rate">
      <img src={star} />
      <p>4.8</p>
    </div>
  </div>
 )
}

function Popular(){
  return(
    <div id="popular">
      <p>Popular Recipes</p>

      <Card img='https://cdn.panelinha.com.br/receita/1588270905274-39_Panelinha_12_02_200635.jpg' />
      <Card img='https://cdn.panelinha.com.br/receita/1588270905274-39_Panelinha_12_02_200635.jpg' />
      <Card img='https://cdn.panelinha.com.br/receita/1588270905274-39_Panelinha_12_02_200635.jpg' />
    </div>
  )
}

function Navigation(){
  return (
    <div id="navigation">
      <div id="home">
        <img src={house} />
        <p>Home</p>
      </div>

      <img id='plus' src={plus} />
      
      <img id="save" src={saveSolid} />

    </div>
  )
}

function App() {
  return (
    <>
      <div id="container">
        <Toolbar />
        <Wellcome />
        <Search />
        <Carrossel />
        <Popular />
        <Navigation />
      </div>
    </>
  );
}

export default App;
