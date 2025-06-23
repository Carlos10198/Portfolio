import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { MyProjetos } from "./style";
import ProjetoCard from "../../../../components/ProjetoCard"; 
import TelaStock from "../../../assets/images/telaAutoStock.png";
import TelaOS from "../../../assets/images/telaOrdem.jpg";
import FotoStock from "../../../assets/images/autoStock.png";
import FotoOS from "../../../assets/images/OrdemFácil.png";

const projetos = [
  {
    titulo: "Auto Stock Car",
    imagemCard: FotoStock,
    imagemModal: TelaStock,
    descricao:
      "Sistema de gerenciamento de estoque com funcionalidade de vendas, desenvolvido em Java, com GUI pura. Permite cadastro, atualização, remoção e controle de produtos em tempo real.",
    tecnologias: "Java, MySQL, Figma",
    data: "Jul, 2024",
    github: "https://github.com/joaocjakaboski/AutoStockCar-Recreate",
  },
   {
    titulo: "Ordem Fácil",
    imagemCard: FotoOS,
    imagemModal: TelaOS,
    descricao:
      "Sistema de gerenciamento de ordem de serviço, desenvolvido em React, com CSS. Permite cadastro, atualização, consulta e controle de das ordens.",
    tecnologias: "React, HTML, CSS, POSTGRE Figma",
    data: "Jul, 2025",
    github: "https://github.com/uri-erechim/teams-2023-beetleclub",
  },
];

function Projetos() {
  return (
    <MyProjetos>
      <div className="container">
        <h1>Projetos</h1>
        <div id="projetos" className="projects">
          <Carousel interval={3000} pause="hover" indicators controls wrap>
  {projetos.map((projeto, index) => (
    <Carousel.Item key={index}>
      <ProjetoCard projeto={projeto} />
    </Carousel.Item>
  ))}
</Carousel>

        </div>
      </div>
    </MyProjetos>
  );
}

export default Projetos;
