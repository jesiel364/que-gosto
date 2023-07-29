import React from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./context/data";
import { useState, useContext } from "react";
import clock from "../src/assets/icons/clock-regular.svg";

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
      <img src={reci.img} />

      <div id="body">
        <p id="title">{reci.title}</p>

        <div id="info">
          <div id="time">
            <img src={clock} />
            <p>45 mins</p>
          </div>
          <div id="nivel">
          <img src={clock} />
            <p>Médio</p>
          </div>
        </div>

        <div id="pills">
          <p>Low carb</p>
          <p>Main dish</p>
          <p>Tradition</p>
        </div>

        <div id="desc">
            <p>Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado.</p>
        </div>

        <div id="content">
            <div id="ingre">
                <p>Ingredientes</p>
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
                <div className="passo">
                    <p>Modo de preparo</p>
                    <p>Corte os pepinos e as cenouras em tiras e deixe em molho na água com uma pitada de sal.</p>
                </div>
                <div className="passo">
                    <p>Faça o arroz temperado com o sal.</p>
                </div>
                <div className="passo">
                    <p>Para o tempero do arroz misture tudo numa tigelinha ou copo.</p>
                </div>
                <div className="passo">
                    <p>Transfira o arroz cozido para uma tigela grande.</p>
                </div>
                <div className="passo">
                    <p>As poucos acrescente o molho de sushi, com a ajuda de uma colher de pau vire o arroz, sem mexer muito.</p>
                </div>
                <div className="passo">
                    <p>Deixe esfriar.</p>
                </div>
                <div className="passo">
                    <p>Forre a esteira para sushi com o plástico filme.</p>
                </div>
                <div className="passo">
                    <p>Coloque folha de alga com a parte mais áspera para cima.</p>
                </div>
                <div className="passo">
                    <p>Umedeça a palma das mãos para o arroz não grudar.</p>
                </div>
                <div className="passo">
                    <p>Preencha a alga com uma camada de arroz de mais ou menos 1 cm uniformemente, comece pelo meio da alga e espalhe, lembrando sempre de deixar 1 cm de sobra da alga para ter uma finalização elegante.</p>
                </div>
                <div className="passo">
                    <p>Após isso espalhe um um pouco de wassabi no centro do arroz de ponta a ponta, a quantidade e a gosto, lembrando que wassabi é forte, a quantidade de um grão de feijão é o suficiente, fica leve e dá um gostinho especial ao sushi.</p>
                </div>
                <div className="passo">
                    <p>Coloque 1 tira de pepino, 1 de cenoura, 1 de salmão e 1 folha de alface.</p>
                </div>
                <div className="passo">
                    <p>Enrole com o auxilio da esteira e com a ponta dos dedos como se fosse um rocambole, lembrando de tirar a esteira conforme a alga cola no arroz.</p>
                </div>
                <div className="passo">
                    <p>No final passe um pouco de água na alga e cole na própria ficará perfeito.</p>
                </div>
                <div className="passo">
                    <p>Mergulhe a faca no copo com água e corte em rolinhos em um único corte para não amassar o sushi, comece cortando pelo centro,assim eles ficarão da mesma altura.</p>
                </div>
                <div className="passo">
                    <p>Coloque em uma travessa e decore a seu gosto.</p>
                </div>
                <div className="passo">
                    <p>Servir com um pequeno prato de molho shoyu.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
