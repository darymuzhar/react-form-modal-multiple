import React, { useState } from "react";
import { Button, Modal, ModalBody, Row, Col, CardImg } from "react-bootstrap";

const ModalCard = (props) => {
  const [modal, setModal] = useState(props.modalShow);
  const datalength = props.user.length;
  const toggle = () => {
    setModal(!modal);
  };
  if (modal === true) {
    console.log(props.user);
  }

  return (
    <div>
      <Button color="dark" className="w-100" onClick={toggle}>
        {" "}
        Preview{" "}
      </Button>
      <Modal centered size="lg" isOpen={modal} toggle={toggle} className={props.className} length={datalength} style={{ backgroundColor: "transparant" }}>
        {props.user.map((user) => (
          <ModalBody number={user.number} length={datalength} style={{ background: "transparant " }}>
            <Row className="p-3">
              <Col sm={4} className="align-self-center">
                <CardImg alt="avatar" className="img-fluid" src={user.foto} />
              </Col>
              <Col sm={8} className="bg-light p-3">
                <Row>
                  <Col sm={12} className="mb-4 text-center">
                    <h5 className="fw-bold mb-2">{user.nama}</h5>
                    <p className="mb-0">FullStack Developer</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Tanggal Lahir</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.ttl}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Jenis Kelamin</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.jeniskelamin}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Agama</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.agama}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Nomer HP</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.nomerhp}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.email}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ModalBody>
        ))}
      </Modal>
    </div>
  );
};
export default ModalCard;
