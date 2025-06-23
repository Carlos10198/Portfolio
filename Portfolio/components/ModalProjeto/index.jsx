import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { MyModal, MyIcon } from "./style";
import { MyButton } from "../../src/containers/header/style";

function MyVerticallyCenteredModal({ projeto, ...props }) {
  if (!projeto) return null;

  return (
    <Modal {...props} size="xl" centered aria-labelledby="contained-modal-title-vcenter">
      <MyModal>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title-custom">
            {projeto.titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="left">
              <img src={projeto.imagemModal} alt={projeto.titulo} className="project-image" />
            </div>
            <div className="right">
              <div className="descricao">
                <h4>Descrição:</h4>
                <p>{projeto.descricao}</p>
                <hr />
              </div>
              <div className="detalhes">
                <h4>Tecnologias:</h4> <p>{projeto.tecnologias}</p>
                <hr />
                <h4>Data:</h4> <p>{projeto.data}</p>
                <hr />
              </div>
              <div className="links">
                <Card.Body>
                  <MyIcon
                    icon="mdi:github"
                    width="40"
                    height="40"
                    className="github"
                    onClick={() => window.open(projeto.github)}
                  />
                </Card.Body>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <MyButton onClick={props.onHide}>Fechar</MyButton>
        </Modal.Footer>
      </MyModal>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
