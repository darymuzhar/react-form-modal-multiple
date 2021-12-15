import InputForm from "./Form/InputForm";
import React from "react";
import Card from "./Card";

function ModalData(props) {
  console.log(props.data);
  return (
    <div id="previewCard">
      {props.list.map((list) => (
        <div className="card-data">
          <Card onClose={list.closeHandler} key={list.length} name={list.name} phone={list.phone} domisili={list.domisili} email={list.email} position={list.position} file={list.file} />
        </div>
      ))}
    </div>
  );
}

export default ModalData;
