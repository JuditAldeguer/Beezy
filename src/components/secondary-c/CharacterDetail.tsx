//React
import { useState } from "react";
import { v4 as uuid } from "uuid";
//styles
import { Card, Modal } from "react-bootstrap";
import "../../styles/components/characterDetail.scss";

const CharacterDetail = (props: any) => {
  //useState
  const [show, setShow] = useState(true);

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

  const renderCharaterDetail = () => { 
     if (props.character === undefined) {
       return (
         <Modal
           show={show}
           fullscreen
           onHide={() => {
             setShow(false);
             window.history.back();
           }}
         >
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
     } 
       return (
         <Modal
           show={show}
           fullscreen
           onHide={() => {
             setShow(false);
             window.history.back();
           }}
         >
           <Modal.Header closeButton>
             <Modal.Title>Character Details:</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Card bg="Secondary" className="mb-2">
               <Card.Img variant="top" src={props.character.img} />
               <Card.Body>
                 <Card.Title>{props.character.name} </Card.Title>
                 <Card.Text>
                   <ul>
                     <li key="status">
                       <p>
                         {iconStatus()}
                       </p>
                     </li>
                     <li key="nickname">
                       <p>
                         <strong>Nickname: </strong>
                         {props.character.nickname}
                       </p>
                     </li>
                     <li key="ocupation">
                        <p>
                       <ul><strong>Ocupation: </strong>{renderOcupation()}</ul></p>
                     </li>
                     <li key="birthday">
                       <p>
                         <strong>Birthday: </strong>
                         {props.character.birthday}
                       </p>
                     </li>
                     <li key="appearance">
                       <p>
                         <strong>Appears in seasons: </strong>
                         {props.character.appearance}
                       </p>
                     </li>
                     <li key="portrayed">
                       <p>
                         <strong>Portrayed by: </strong>
                         {props.character.portrayed}
                       </p>
                     </li>
                   </ul>
                 </Card.Text>
               </Card.Body>
             </Card>
           </Modal.Body>
         </Modal>
       );
     
  };


  return (
    <div>HEy: {renderCharaterDetail()}</div>);
 
};

export default CharacterDetail;
