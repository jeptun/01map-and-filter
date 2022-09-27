import React from "react";

export default function KeysInReact() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const details = [
    {
      name: "Ado",
      age: 30,
    },
    {
      name: "Ido",
      age: 40,
    },
    {
      name: "Edo",
      age: 50,
    },
    {
      name: "Udo",
      age: 60,
    },
    {
      name: "Odo",
      age: 70,
    },
  ];
  return (
    <div className="container">
      <ul className="list-group my-5">
        {numbers.map((number, index) => (
          <li className="list-group-item" key={index}>
            {number}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-numbered">
        {details.map((detail, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Name</div>
              {detail.name}
            </div>
            <span className="badge bg-primary rounded-pill">{detail.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
