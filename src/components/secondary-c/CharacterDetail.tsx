//React
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
//styles
import "../styles/components/characterDetail.scss";

const CharacterDetail = (props: any) => {
  //useState
  const [show, setShow] = useState(false);

  const renderOcupation = () => {
    return props.character.occupation.map((o: any) => {
      return <li key={uuid()}>{o}</li>;
    });
  };

  const iconStatus = () => {
    if (props.character.status === "Deceased") {
      return (
        <>
          <p>
            <strong>Status: </strong>
            <i className="fas fa-skull-crossbones"></i>;
            {` ${props.character.status}`}
          </p>
        </>
      );
    } else if (props.character.status === "Alive") {
      return (
        <>
          <p>
            <strong>Status: </strong>
            <i className="fas fa-heartbeat"></i>;{` ${props.character.status}`}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p>
            <strong>Status: </strong>
            <i className="fas fa-question-circle"></i>
            {` ${props.character.status}`}
          </p>
        </>
      );
    }
  };

  if (props.character === undefined) {
    return (
      <Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Character not found</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="not_found_detail">
            {" "}
            Please check if the address is correct{" "}
          </p>
        </Modal.Body>
      </Modal>
    );
  } else {
    return (
      <Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card
            bg="Secondary"
            text="white"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Img variant="top" src={props.character.img} />
            <Card.Body>
              <Card.Title>{props.character.name} </Card.Title>
              <Card.Text>
                <li>
                  <p>
                    <strong>Status: </strong>
                    {iconStatus()}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Nickname: </strong>
                    {props.character.nickname}
                  </p>
                </li>
                <li>
                  <ul>Ocupation: {renderOcupation()}</ul>
                </li>
                <li>
                  <p>
                    <strong>Birthday: </strong>
                    {props.character.birthday}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Appears in seasons: </strong>
                    {props.character.appearance}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Portrayed by: </strong>
                    {props.character.portrayed}
                  </p>
                </li>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    );
  }
};

export default CharacterDetail;
