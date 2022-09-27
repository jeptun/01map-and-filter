import React, { useState } from "react";

export default function EventHandling() {
  const [input, setInput] = useState({
    num1: "",
    num2: "",
  });
  const [result, setResult] = useState("");

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sum = () => {
    const { num1, num2 } = input;
    setResult(+num1 + +num2);
  };
  return (
    <div className="container">
      <form className="card  py-5 px-3">
        <div className="mb-3">
          <input
            type="number"
            name="num1"
            value={input.num1}
            placeholder="Add Numb1"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="num2"
            value={input.num2}
            placeholder="Add Numb2"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <button onClick={sum} className="btn-primary btn">
            AddNumbs
          </button>
        </div>
        <div className="mb-3">
          <h2 className="mb-3">{result}</h2>
        </div>
      </form>
    </div>
  );
}
