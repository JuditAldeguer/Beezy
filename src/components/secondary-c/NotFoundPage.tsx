import "../../styles/components/notFoundPage.scss";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const NotFoundPage = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <Modal
      size="lg"
      backdrop="static"
      centered
      className="not_found_page"
      show={show}
      onHide={() => {
        setShow(false);
        window.history.back();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          ERROR: The page you are looking for does not exist
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Check if the site address
          <span className="cursiva"> (url)</span> is correct.
        </p>
      </Modal.Body>
    </Modal>
  );
};
export default NotFoundPage;
