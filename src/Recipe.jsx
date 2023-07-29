import React from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./context/data";
import { useState, useContext } from "react";
import clock from "../src/assets/icons/clock-regular.svg";
import fire from "../src/assets/icons/fire.svg";
import "./recipe.css"

const Recipe = () => {
  const { id } = useParams();

  const { recipes } = useContext(DataContext);

  let reci = null;

  recipes.filter((item) => {
    if (item.id == id) {
      reci = item;
    }
  });

  return (
    <div id="recipe">
      <img id="img" src={reci.img} />

      <div id="body">
        <p id="title">{reci.title}</p>

        <div id="info">
          <div id="time">
            <img src={clock} />
            <p>45 mins</p>
          </div>
          <div id="time">
          <img src={fire} />
            <p>Médio</p>
          </div>
        </div>

       

        <div id="desc">
            <p>Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado.</p>
        </div>

        <div id="content">
            <div id="ingre">
                <p id='title'>Ingredientes</p>
                <p>4 xícaras de arroz japonês, encontrado em lojas especializadas</p>
                <p>4 colheres de sopa de vinagre de arroz para sushi encontrado em lojas especializadas</p>
                <p>2 pepinos</p>
                <p>Tirinhas de salmão</p>
                <p>5 xícaras de água para cozimento</p>
                <p>1 pacote e algas desidratadas para enrolar nori</p>
                <p>2 cenouras</p>
                <p>Folhas de alface</p>
            </div>

            <div id="preparo">
               
                    <p id="title">Modo de preparo</p>
                   
                
                {reci.recipe.map(item => (
                <div className="passo">
                <p className="step">{item.id}° </p>
                <p>{item.desc}</p>
                                  </div>
                ))}
    
            </div>
            
             <div id="pills">
             {reci.slugs.map(item => (
             <p>{item}g</p>
             
             ))}
         
        </div> 
            
           
            
        </div>
      </div>
    </div>
  );
};

export default Recipe;
