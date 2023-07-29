import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import controls from "../src/assets/icons/controls.svg";
import fire from "../src/assets/icons/fire.svg";
import hot from "../src/assets/icons/hot.svg";
import magnify from "../src/assets/icons/magnify.svg";
import pimenta from "../src/assets/icons/pimenta.svg";
import pizza from "../src/assets/icons/pizza.svg";

import saveSolid from "../src/assets/icons/save-solid.svg";
import sorvete from "../src/assets/icons/sorvete.svg";
import clock from "../src/assets/icons/clock-regular.svg";
import star from "../src/assets/icons/star-solid.svg";

function Wellcome() {
  let [name, setN] = useState("Ana");

  return (
    <div id="well">
      <p id="name">Olá. {name}!</p>
      <p id="text">
        Faça você a sua comida, fique em <span>casa</span>
      </p>
    </div>
  );
}

function Search() {
  return (
    <div id="search">
      <div>
        <input placeholder="Buscar receitas" />
      </div>
      <div>
        <img src={magnify} id="magnify" />
        {/* <label>Buscar receitas</label> */}
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
      icon: pimenta,
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

function Card(props) {
  return (
    <div id="card">
           <Link to={"recipe/" + props.id}>
            <div style={{ backgroundImage: `url(${props.img})` }} id="img">
   

          <div id="time">
            <img src={clock} />
            <p>16 mins</p>
          </div>
        

        <div id="rate">
          <img src={star} />
          <p>4.8</p>
        </div>
      </div></Link>
      <div id="text">
        <p id="title">{props.title}</p>
        <p id="desc">{props.desc}</p>
      </div>
    </div>
  );
}

function Popular() {
  const recipes = [
    {
      id: 1,
      title: "Sushi",
      desc: "Japão",
      img: "https://www.djapa.com.br/wp-content/uploads/2021/01/sushi.jpg",
    },
    {
      id: 2,
      title: "Feijoada",
      desc: "Brasil",
      img: "https://cdn.panelinha.com.br/receita/1588270905274-39_Panelinha_12_02_200635.jpg",
    },
    {
      id: 3,
      title: "Chille",
      desc: "America do Norte",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkpqCtmQPln2G0PJSZgE7KeiJBP0PDmtvFw&usqp=CAU",
    },
    {
      id: 4,
      title: "Macarronada",
      desc: "Itália",
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/b5b56b2ae93d3dc958cf0c21c9383b18_XL.jpg",
    },
    {
      id: 5,
      title: "Lámen",
      desc: "Japão",
      img: "https://cdn0.tudoreceitas.com/pt/posts/7/0/4/lamen_japones_caseiro_facil_e_pratico_10407_600.webp",
    },
    {
      id: 6,
      title: "Pão de queijo",
      desc: "Brasil",
      img: "https://static.itdg.com.br/images/1200-675/1b388cd05b842609f91603072d894643/pao-de-queijo-facil-e-delicioso.png",
    },
    {
      id: 7,
      title: "Tapioca",
      desc: "Brasil",
      img: "https://receitadesabor.com.br/wp-content/uploads/2023/05/Como-Preparar-a-Tapioca-Molhadinha-Perfeita.jpg",
    },
  ];

  return (
    <div id="popular">
      <p>Receitas Populares</p>
      <div id="items">
        {recipes.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <div id="container">
        <Wellcome />
        <div id="search-carrossel">
          <Search />
          <Carrossel />
        </div>
        <Popular />
      </div>
    </>
  );
}

export default Home;
