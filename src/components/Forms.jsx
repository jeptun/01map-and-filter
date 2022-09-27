import React, { useState } from "react";
import Card from "react-bootstrap/Card";
export default function Forms() {
  const [objData, setobjData] = useState();

  const getInputs = (event) => {
    let data = { [event.target.name]: event.target.value };
    setobjData({ ...objData, ...data });
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log(objData);
  };
  return (
    <div className="container">
      <form className="card p-5" onSubmit={submitData}>
        <input
          name="name"
          type="text"
          className="form-control mb-3"
          placeholder="Name"
          onChange={getInputs}
        />
        <input
          name="age"
          type="number"
          className="form-control mb-3"
          placeholder="Age"
          onChange={getInputs}
        />
        <input
          name="hobbies"
          type="text"
          className="form-control mb-3"
          placeholder="Hobbies"
          onChange={getInputs}
        />
        <input
          name="date"
          type="date"
          className="form-control mb-3"
          placeholder="Date"
          onChange={getInputs}
        />
        <input
          name="file"
          type="file"
          className="form-control mb-3"
          placeholder="file"
          onChange={getInputs}
        />
        <button
         type="submit"
         className="btn btn-primary my-2"
         >
          Submit
        </button>
        <button
         type="reset"
         className="btn btn-primary"
         >
          Reset 
        </button>
      </form>
      <div>
        <Card className="my-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Nick: {}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Age:{}</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
