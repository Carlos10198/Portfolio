import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../ModalProjeto";

function ProjetoCard({ projeto }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="image-container">
        <img src={projeto.imagemCard} alt={projeto.titulo} className="project-image" />
        <Button className="hover-button" variant="light" onClick={() => setModalShow(true)}>
          Ver Mais
        </Button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        projeto={projeto}
      />
    </>
  );
}

export default ProjetoCard;
