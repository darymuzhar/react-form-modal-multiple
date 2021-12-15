import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, FormGroup } from "react-bootstrap";
import React, { useState } from "react";

function InputForm(props) {
  const [nama, setNama] = useState("");
  const handleNama = (e) => {
    setNama(e.target.value);
  };

  const [ttl, setTtl] = useState("");
  const handleTanggalLahir = (e) => {
    setTtl(e.target.value);
  };

  const [jeniskelamin, setJeniskelamin] = useState("");
  const handleJeniskelamin = (e) => {
    setJeniskelamin(e.target.value);
  };

  const [agama, setAgama] = useState("");
  const handleAgama = (e) => {
    setAgama(e.target.value);
  };

  const [nomerhp, setNomerhp] = useState("");
  const handleNomerhp = (e) => {
    setNomerhp(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [foto, setFoto] = useState("");
  const handleFoto = (e) => {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      setFoto(src);
    }
  };
  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      nama: nama,
      ttl: ttl,
      jeniskelamin: jeniskelamin,
      agama: agama,
      nomerhp: nomerhp,
      email: email,
      foto: foto,
    };
    props.submitData(user);
    console.log(user);
  }

  return (
    <div>
      <Form className="needs-validation mb-2" onSubmit={handleSubmit}>
        <h4 className="#">Isi Data Diri</h4>
        <FormGroup row>
          <Form.Label sm={4}> Nama </Form.Label>
          <Col sm={13}>
            <Form.Control type="text" onChange={handleNama} />
            {/*<Input id="nama" name="nama" type="text" onChange={handleNama} />*/}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Form.Label sm={4}>Tanggal Lahir</Form.Label>
          <Col sm={13}>
            <Form.Control type="date" placeholder="Enter email" onChange={handleTanggalLahir} />
            {/*<Input id="pekerjaan" name="pekerjaan" type="text" onChange={handlePekerjaan} />*/}
          </Col>
        </FormGroup>
        <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-4 text start">Jenis Kelamin</legend>
          <Col sm={13}>
            <FormGroup check className="text-start">
              <Form.Check name="jeniskelamin" type="radio" value="laki-laki" onChange={handleJeniskelamin} />
              <Form.Label check> Laki-laki</Form.Label>
            </FormGroup>
            <FormGroup check className="text-start">
              <Form.Check name="jeniskelamin" type="radio" value="perempuan" onChange={handleJeniskelamin} />
              <Form.Label check> Perempuan</Form.Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Form.Label sm={4}> Agama </Form.Label>
          <Col sm={13}>
            <Form.Select defaultValue={"DEFAULT"} id="agama" name="agama" type="select" onChange={handleAgama}>
              <option value="DEFAULT" disabled>
                Pilih..
              </option>
              <option value="budha"> Budha </option>
              <option value="hindu"> Hindu </option>
              <option value="kristen"> Kristen </option>
              <option value="katolik"> Katolik </option>
              <option value="islam"> Islam </option>
              <option value="lainnya"> Lainnya </option>
            </Form.Select>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Form.Label sm={4}>Nomor HP</Form.Label>
          <Col sm={13}>
            <Form.Control id="nomerhp" name="nomerhp" type="number" onChange={handleNomerhp} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Form.Label sm={4}> Email </Form.Label>
          <Col sm={13}>
            <Form.Control id="email" name="email" type="email" onChange={handleEmail} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Form.Label sm={4}>Upload Foto </Form.Label>
          <Col sm={13}>
            <Form.Control id="foto" name="foto" type="file" onChange={handleFoto} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button color="primary w-100" type="submit" style={{ width: "510px", marginTop: "20px" }}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default InputForm;
