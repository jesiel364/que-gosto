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
let [name, setN] = useState("Ana")

  return (
    <div id="well">
      <p id="name">Olá. {name}!</p>
      <p id="text">Faça você a sua comida,<br></br> fique em casa</p>
    </div>
  );
}

function Search() {
  return (
    <div id="search">
    <div>
      <input focused />
      </div>
      <div>
      <img src={magnify} id="magnify" />
      <label>Buscar receitas</label>
      <img src={controls} id="controls" />
      </div>
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
      title: "Lanches",
      icon: pizza,
    },
    {
      id: 3,
      title: "Bebidas",
      icon: hot,
    },
    {
      id: 4,
      title: "Food",
      icon: pizza,
    },
     {
      id: 5,
      title: "Food",
      icon: hot,
    },
     {
      id: 6,
      title: "Food",
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
  <div id="card" >

    <div style={{ backgroundImage: `url(${props.img})` }} id="img" ></div>
    <div id="time">
      <img src={clock} />
      <p>16 mins</p>
    </div>

    <div id="rate">
      <img src={star} />
      <p>4.8</p>
    </div>
    
    <div id="text">
    <p id="title">{props.title}</p>
    <p id="desc">{props.desc}</p>
    </div>
  </div>
 )
}

function Popular(){
  return(
    <div id="popular">
      <p>Receitas Populares</p>
    <div id="items">
      <Card desc="Brasil" title="Feijoada" img='https://cdn.panelinha.com.br/receita/1588270905274-39_Panelinha_12_02_200635.jpg' />
      <Card desc="America do Norte" title="Chille" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkpqCtmQPln2G0PJSZgE7KeiJBP0PDmtvFw&usqp=CAU' />
      <Card desc="Itália" title="Macarronada" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF0B4-GMN-skUPJYhg2Hl56tdre_kbl6v8P0bjArg2fl_3DqockJL51RL&s=10' />
    </div>
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
