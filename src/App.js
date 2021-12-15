import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./component/Form/InputForm";
import ModalCard from "./component/Modal-Bootstrap/ModalCard";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [number, setNumber] = useState(0);

  const handleSubmitData = (userData) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          ...userData,
          number: String(number),
        },
      ];
    });

    setNumber(number + 1);
    setModalShow(true);
  };

  console.log(modalShow);
  console.log(userData);

  // TEst
  return (
    <div className="mx-auto my-4 bg-light rounded-3 border p-5" style={{ width: "45%" }}>
      <InputForm submitData={handleSubmitData} />

      {modalShow && <ModalCard user={userData} />}
    </div>
  );
}

export default App;
