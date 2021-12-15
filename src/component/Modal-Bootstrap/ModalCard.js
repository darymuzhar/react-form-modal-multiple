import React, { useState } from "react";
import { Button, Card, Row, Col, CardImg } from "react-bootstrap";

const ModalCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ position: "relative" }}>
      <Button variant="primary" onClick={handleShow} style={{ width: "510px", marginTop: "20px" }}>
        Preview Data
      </Button>
      {show && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              width: "100%",
              overflow: "scroll",
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          >
            {props.user.map((item) => (
              <Card key={item.number} show={show} onHide={handleClose} style={{ width: "50%", margin: "10px" }}>
                <Row className="p-3">
                  <Col sm={4} className="align-self-center">
                    <CardImg alt="avatar" className="img-fluid" src={item.foto} />
                  </Col>
                  <Col sm={8} className="bg-light p-3">
                    <Row>
                      <Col sm={12} className="mb-4 text-center">
                        <h5 className="fw-bold mb-2">{item.nama}</h5>
                        <p className="mb-0"></p>
                      </Col>
                      <Col sm={4} className="mb-3">
                        <p className="mb-0">Ulang Tahun</p>
                      </Col>
                      <Col sm={8} className="mb-3">
                        <p className="mb-0">: {item.ttl}</p>
                      </Col>
                      <Col sm={4} className="mb-3">
                        <p className="mb-0">Jenis Kelamin</p>
                      </Col>
                      <Col sm={8} className="mb-3">
                        <p className="mb-0">: {item.jeniskelamin}</p>
                      </Col>
                      <Col sm={4} className="mb-3">
                        <p className="mb-0">Agama</p>
                      </Col>
                      <Col sm={8} className="mb-3">
                        <p className="mb-0">: {item.agama}</p>
                      </Col>
                      <Col sm={4} className="mb-3">
                        <p className="mb-0">Nomer HP</p>
                      </Col>
                      <Col sm={8} className="mb-3">
                        <p className="mb-0">: {item.nomerhp}</p>
                      </Col>
                      <Col sm={4} className="mb-3">
                        <p className="mb-0">Email</p>
                      </Col>
                      <Col sm={8} className="mb-3">
                        <p className="mb-0">: {item.email}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Card.Footer></Card.Footer>
              </Card>
            ))}
            <Button variant="primary" onClick={handleClose} style={{ width: "510px", margin: "20px 0 " }}>
              Close
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
export default ModalCard;
