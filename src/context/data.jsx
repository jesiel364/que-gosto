import { createContext, useState, useEffect } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [userData, setUserData] = useState()

    const recipes = [
        {
          id: 1,
          title: "Sushi",
          desc: "Japão",
          img: "https://www.djapa.com.br/wp-content/uploads/2021/01/sushi.jpg",
          time: '1h',
          nivel: 'Médio',
          slugs: ['Prato', 'Risoto', 'Panqueca', 'Yakisoba', 'Escondidinho'],
          about: 'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado.',
          ingredientes: [
            '4 xícaras de arroz japonês, encontrado em lojas especializadas',
            '4 colheres de sopa de vinagre de arroz para sushi encontrado em lojas especializadas',
            '2 pepinos',
            'Tirinhas de salmão',
            '5 xícaras de água para cozimento',
            '1 pacote e algas desidratadas para enrolar nori',
            '2 cenouras',
            'Folhas de alface',
          ],
          recipe:[
            {
              id:1,
              desc: 'Corte os pepinos e as cenouras em tiras e deixe em molho na água com uma pitada de sal.'
            },
            {
              id:2,
              desc: 'Faça o arroz temperado com o sal.'
            },
            {
              id:3,
              desc: 'Para o tempero do arroz misture tudo numa tigelinha ou copo.'
            },
            {
              id:4,
              desc: 'Transfira o arroz cozido para uma tigela grande.'
            },
            {
              id:5,
              desc: 'As poucos acrescente o molho de sushi, com a ajuda de uma colher de pau vire o arroz, sem mexer muito.'
            },
            {
              id:6,
              desc: 'Deixe esfriar.'
            },
            {
              id:7,
              desc: 'Forre a esteira para sushi com o plástico filme.'
            },
            {
              id:8,
              desc: 'Coloque folha de alga com a parte mais áspera para cima.'
            },
            {
              id:9,
              desc: 'Umedeça a palma das mãos para o arroz não grudar.'
            },
            {
              id:10,
              desc: 'Preencha a alga com uma camada de arroz de mais ou menos 1 cm uniformemente, comece pelo meio da alga e espalhe, lembrando sempre de deixar 1 cm de sobra da alga para ter uma finalização elegante.'
            },
            {
              id:11,
              desc: 'Após isso espalhe um um pouco de wassabi no centro do arroz de ponta a ponta, a quantidade e a gosto, lembrando que wassabi é forte, a quantidade de um grão de feijão é o suficiente, fica leve e dá um gostinho especial ao sushi.'
            },
            {
              id:12,
              desc: 'Coloque 1 tira de pepino, 1 de cenoura, 1 de salmão e 1 folha de alface.'
            },
            {
              id:13,
              desc: 'Enrole com o auxilio da esteira e com a ponta dos dedos como se fosse um rocambole, lembrando de tirar a esteira conforme a alga cola no arroz.'
            },
            {
              id:14,
              desc: 'No final passe um pouco de água na alga e cole na própria ficará perfeito.'
            },
            {
              id:15,
              desc: 'Mergulhe a faca no copo com água e corte em rolinhos em um único corte para não amassar o sushi, comece cortando pelo centro,assim eles ficarão da mesma altura.'
            },
            {
              id:16,
              desc: 'Coloque em uma travessa e decore a seu gosto.'
            },
            {
              id:17,
              desc: 'Servir com um pequeno prato de molho shoyu.'
            },
          ]
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
        <DataContext.Provider value={{userData, setUserData, recipes}}>
            {children}
        </DataContext.Provider>
    );

}

